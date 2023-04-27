export default interface RouteConfig {
   exact?: boolean;
   path: string;
   component: React.ComponentType<any>;
}