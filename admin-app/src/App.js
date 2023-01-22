import './App.css';
import Login from './pages/Login';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import Orders from './pages/Orders';
import BlogCatList from './pages/BlogCatList';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCategory from './pages/AddCategory';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/admin' element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='enquiry' element={<Enquiries/>} />
            <Route path='blog-list' element={<BlogList/>} />
            <Route path='blog-category-list' element={<BlogCatList/>} />
            <Route path='orders' element={<Orders/>} />
            <Route path='customers' element={<Customers/>} />
            <Route path='color-list' element={<ColorList/>} />
            <Route path='color' element={<AddColor/>} />
            <Route path='category-list' element={<CategoryList/>} />
            <Route path='category' element={<AddCategory/>} />
            <Route path='brand-list' element={<BrandList/>} />
            <Route path='brand' element={<AddBrand/>} />
            <Route path='product-list' element={<ProductList/>} />
            <Route path='product' element={<AddProduct/>} />
            <Route path='blog' element={<AddBlog/>} />
            <Route path='blog-category' element={<AddBlogCat/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
