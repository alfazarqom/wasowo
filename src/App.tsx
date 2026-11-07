import {Route,Routes} from "react-router-dom";
import AppShell from "./layouts/AppShell";
import StandaloneLayout from "./layouts/StandaloneLayout";
import Overlays from "./components/Overlays";
import {pages} from "./pages";
const appPaths=["/","/products","/products/:id","/categories","/categories/:slug","/search","/wishlist","/cart","/checkout","/payment","/payment/result","/order-success","/profile","/profile/edit","/addresses","/orders","/orders/:id","/orders/:id/tracking","/returns"];
const appNames=["HomePage","ProductsPage","ProductDetailPage","CategoriesPage","CategoryDetailPage","SearchPage","WishlistPage","CartPage","CheckoutPage","PaymentPage","PaymentResultPage","OrderSuccessPage","ProfilePage","EditProfilePage","AddressPage","OrdersPage","OrderDetailPage","OrderTrackingPage","ReturnRefundPage"];
const standalonePaths=["/about","/contact","/faq","/help","/shipping-policy","/return-policy","/privacy-policy","/terms","/offline","/maintenance"];
const standaloneNames=["AboutPage","ContactPage","FAQPage","HelpPage","ShippingPolicyPage","ReturnPolicyPage","PrivacyPolicyPage","TermsPage","OfflinePage","MaintenancePage"];
export default function App(){return <><Routes><Route element={<AppShell/>}>{appPaths.map((path,i)=><Route key={path} path={path} element={pages[appNames[i]]}/>)}</Route><Route element={<StandaloneLayout/>}>{standalonePaths.map((path,i)=><Route key={path} path={path} element={pages[standaloneNames[i]]}/>)}<Route path="*" element={pages.NotFoundPage}/></Route></Routes><Overlays/></>}
