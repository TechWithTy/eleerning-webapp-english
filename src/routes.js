import Category from "./Pages/Category/Category";
import Index from "./Pages/Index/Index";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/course-info/:courseName",
    element: <CourseInfo/>,
  },
  {
    path: "/category-info/:categoryName",
    element: <Category />,
  },
  {
    path: "/article-info/:articleName",
    element: <ArticleInfo />,
  },
];
export default routes;
