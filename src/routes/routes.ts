import { lazy, LazyExoticComponent } from "react";
import { LazyPage2} from "./../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(/* webpackChunkName: "LazyLayout" */ () => import('../01-lazyload/components/layout/LazyLayout'));


export const routes:Route[] = [
  {
    path: "/lazyload/*", // <---
    to: "/lazyload/",
    Component: Lazy1,
    name: "Lazy1",
  },
  {
    path: "lazy2",
    to: "lazy2",
    Component: LazyPage2,
    name: "Lazy2",
  }
];
