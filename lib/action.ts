"use server";

import { revalidatePath } from "next/cache";
import { Post, User, Appointment } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { isValidObjectId } from "mongoose";
import { ObjectId } from "mongodb"
import { redirect } from "next/navigation";
export const addAppointment = async (prevState: any, formData: any) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  try {
  var typeOfService = [];
  

    for (var pair of formData.entries()) {
        if (pair[0] === 'typeOfService') {
          typeOfService.push(pair[1]);
        }
    }
    if(typeOfService.length===0){
      throw new Error('At least one service must be checked')
    }

  const {
    userId,
    username,
    email,
    contactNumber,
    appointmentDate,
    message,
  } = Object.fromEntries(formData);

    connectToDb();
    const newAppointment = new Appointment({
      userId,
      username,
      email,
      contactNumber,
      appointmentDate,
      typeOfService,
      message,
    });

    await newAppointment.save();
    revalidatePath("/appointments");
  } catch (err:any) {
    console.log(err);
    return {
      success: false,
      message: err.message
    };
  }
  redirect('/appointments')
};

export const getAppointmentByUser = async(userId:string)=>{
  try{
    connectToDb();
     const userAppointments = await Appointment.find({userId:userId}).lean();
     return userAppointments;
  }catch(err){
    console.log(err)
  }
}
export const getAppointmentByAdmin = async(key:string)=>{

  try{
    connectToDb();
    let appointments:[] = [];
    if(key==="all"){
       appointments = await Appointment.find({}).lean();
    }
    else if(key==='unread'){
       appointments = await Appointment.find({"admin.isViewed":false}).lean();
       
    }
    else if(key==='accepted'){
       appointments = await Appointment.find({"admin.isAccepted":true}).lean();
       
    }
    else if(key==='rejected'){
       appointments = await Appointment.find({"admin.isRejected":true}).lean();
       
    }
     return appointments;
  }catch(err){
    console.log(err)
  }
}

export const acceptAppointment = async (prevState: any, formData: any) => {
  console.log('first')
  const {id} = Object.fromEntries(formData);

  try {
    connectToDb();
     await Appointment.findOneAndUpdate({_id:new ObjectId(id)},{$set:{"admin.isViewed":true,"admin.isAccepted":true}})

    revalidatePath("/admin");
    revalidatePath("/appointments");
  } catch (err) { 
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const rejectAppointment = async (prevState: any, formData: any) => {

  const {id} = Object.fromEntries(formData);

  try {
    connectToDb();
    const appointments = await Appointment.findOneAndUpdate({_id:new ObjectId(id)},{$set:{"admin.isViewed":true,"admin.isRejected":true}})
    
    revalidatePath("/admin");
    revalidatePath("/appointments");
  } catch (err) { 
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addPost = async (prevState: any, formData: any) => {

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const addUser = async (prevState: any, formData: any) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleGoogleLogin = async () => {
  "use server";
  await signIn("google");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState: any, formData: any) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err: any) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
