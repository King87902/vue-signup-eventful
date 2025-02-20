import AddNewPageView from "@/views/AddNewPageView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import ItemDetailsPageView from "@/views/ItemDetailsPageView.vue";
import EditDetailView from "@/views/EditDetailView.vue";
import DashboardView from "@/views/DashboardView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { createWebHistory, createRouter } from "vue-router";


const routes = [
  { path: "/", name: "dashboard", component: DashboardView },
  { path: "/auth/login", name: "login", component: LoginView },
  { path: "/auth/register", name: "register", component: RegisterView },
  { path: "/moments/item", name: "single-item", component: ItemDetailsPageView },
  { path: "/moments/item/edit", name: "single-item-edit", component: EditDetailView },
  { path: "/add", name: "add-moment", component: AddNewPageView },
  { path: "/:catchAll(.*)", name: "not-found", component: NotFoundView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});