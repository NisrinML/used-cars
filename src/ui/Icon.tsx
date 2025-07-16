import { lazy, Suspense, LazyExoticComponent, ComponentType } from "react";
import { firstUp } from "../utilities/functions";
type IconName = 'Date' | 'Images' | 'Location' | 'Whatsapp' | 'Loading';


const icons: Record<IconName, LazyExoticComponent<ComponentType>> = {
  Date: lazy(() => import('./icons/Date')),
  Images: lazy(() => import('./icons/Images')),
  Location: lazy(() => import('./icons/Location')),
  Whatsapp: lazy(() => import('./icons/Whatsapp')),
  Loading: lazy(() => import('./icons/Loading')),
};

interface IconProps {
  name: string;
  w:number|null,
  h:number
}

function Icon({ name ,w,h}: IconProps) {

  const iconKey = firstUp(name) as IconName;
  if (!icons[iconKey]) return null;
  const Component = icons[firstUp(name) as IconName] ;
  
  return (
    <Suspense fallback={"loading"}>
      <span className={`flex flex-row justify-center items-center rounded-[50%] hover:cursor-pointer active:scale-[0.99] ${w ?`w-${w}`:''} ${h ?`h-${h}`:''} `}>
        <Component/>
      </span>
    </Suspense>
  );
}

export default Icon;
