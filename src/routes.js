/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Profile from 'views/Profile/Profile';
import AdminLogs from 'views/AdminLogs/AdminLogs';
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/superadmin"
  },
  {
    path: "/profile",
    name: "Profile",
    // rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Profile,
    layout: "/superadmin"
  },
  {
    path: "/table",
    name: "Table List",
    // rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/superadmin"
  },
  {
    path: "/typography",
    name: "Typography",
    // rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/superadmin"
  },
  {
    path: "/icons",
    name: "Icons",
    // rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/superadmin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    // rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/superadmin"
  },
  {
    path: "/admin-logs",
    name: "Admin Logs",
    // rtlName: "إخطارات",
    icon: "content_paste",
    component: AdminLogs,
    layout: "/superadmin"
  },
];

export default dashboardRoutes;
