//router
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

//pages
import { LoginPage,Custom404Page, DashboardPage,TransactionsPage} from "./pages";
import { CustomersPage,CustomerDetailsPage,ProfileTab,TransactionsTab, EditProfilePage } from "./pages/customers";
import { MainEnquiryPage,DisputeManagementsPage,EnquiriesAndComplaintsPage } from "./pages/enquiriesAndDisputes";
import ProfileSearchPage from "./pages/search/ProfileSearchPage";


//context
import NavbarContextProvider from "./contexts/NavbarContextProvider";

function CheckScreenSize({children}){
    //if the screen is small, this is what shows
    if(window.matchMedia("(max-width:800px)").matches){
      return(
        <div className="h-screen flex items-center justify-center">
          <h1>Please open on a desktop screen</h1>
        </div>
      )
    }

    return children
}

function App() {

  return (
    <NavbarContextProvider>
      <Router>
        <Routes>
          <Route 
            exact path="/" 
            element={
              <CheckScreenSize>
                <LoginPage/>
              </CheckScreenSize>
            }
          />

          <Route element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/customers" element={<CustomersPage/>}/>
            <Route path="/customers/:id/edit-profile" element={<EditProfilePage/>}/>
            <Route path="/customers/:id" element={<CustomerDetailsPage/>}>
              <Route path="profile" element={<ProfileTab/>}/>
              <Route path="transactions" element={<TransactionsTab/>}/>
            </Route>
            <Route path="/transactions" element={<TransactionsPage/>}/>
            <Route path="/enquiries" element={<MainEnquiryPage/>}>
                <Route path="enquiries-complaints" element={<EnquiriesAndComplaintsPage/>}/>
                <Route path="dispute-managements" element={<DisputeManagementsPage/>}/>
            </Route>
            <Route path="search-profile" element={<ProfileSearchPage/>}/>
            <Route path="*" element={<Custom404Page/>}/>
          </Route>
        </Routes>
      </Router>
    </NavbarContextProvider>
  )
}

export default App
