import { Suspense } from "react";
import styles from "./admin.module.css";

import { auth } from "@/lib/auth";


import AdminAppointment from "../Components/adminAppointments/AdminAppointment";
import AdminUsers from "../Components/adminUsers/adminUsers";
import AdminUserForm from "../Components/adminUserForm/adminUserForm";


const AdminPage = async () => {

  const session:any = await auth();
  // console.log(session)
   const isAdmin = session?.user?.isAdmin;

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
        
          <Suspense fallback={<div>Loading...</div>}>
            <AdminAppointment isAdmin={isAdmin} />
          </Suspense>
        </div>
      </div>
      {/* <div className={styles.row}>
        <div className={styles.col}>
        
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId = {session?.user?.id} />
        </div>
      </div> */}
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;