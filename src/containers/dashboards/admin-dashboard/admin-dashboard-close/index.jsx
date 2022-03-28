import { Button } from "components/button";
import { Link, useHistory } from "react-router-dom";

export const AdminDashboardClose = ({ setElement, setPosition }) => {
  const { push } = useHistory();

  const getBtn = (e) => {
    if (e?.tagName === "BUTTON") {
      return e;
    } else {
      return getBtn(e?.parentNode);
    }
  };

  const showSubMenu = (e, menu) => {
    const el = getBtn(e?.target);

    setPosition([
      +el?.offsetLeft - +el?.parentNode?.scrollLeft,
      +el?.offsetTop - +el?.offsetParent?.scrollTop + (+e?.pageY - +e?.clientY),
    ]);
    setElement(menu);
  };

  const hideSubMenu = (_) => {
    setElement("");
  };

  return (
    // overflow-y-scroll scrollbar-hide
    <div className="flex flex-col items-start h-full py-12">
      <Link to="/dashboard" className="mb-10 ml-[14px]">
        {/* <ICUtopiopsSmall /> */}
      </Link>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "fully-managed")}
        onMouseLeave={hideSubMenu}
        className="pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/fully-managed/applications")}
      >
        {/* <ICColumnsGap
          className={classNames(
            'w-6 h-6 p-0.5',
            pathname.startsWith('/fully-managed')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "environments")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__env pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/environments")}
      >
        {/* <BorderOuter
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('environments')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "applications")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__apps static  pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/applications")}
      >
        {/* <Apps
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/applications')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "kubernetes")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__kubernetes  pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/kubernetes")}
      >
        {/* <ICKubernetes
          viewPort="0 0 32 32"
          className={classNames(
            'w-6 h-6',
            pathname.startsWith('/kubernetes')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      {/* <Button
      className="  pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer"
        onMouseEnter={(e) => showSubMenu(e, 'automated-ops')}
        onMouseLeave={hideSubMenu}
      icon onClick={() => push('/automated-ops/pipeline')}>
        <ICBoundingBoxCircle
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/automated-ops')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        />
      </Button> */}
      <Button
        onMouseEnter={(e) => showSubMenu(e, "databases")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__databases  pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/databases")}
      >
        {/* <ICDatabase
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/databases')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      {/* for now redis is default cache item TODO for change this */}
      <Button
        onMouseEnter={(e) => showSubMenu(e, "cache")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__cache   pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/cache/redis")}
      >
        {/* <ICRedis
          viewPort="0 0 32 32"
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/cache/redis')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "ssl")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__tls   pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/ssl")}
      >
        {/* <ICLock
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/ssl') ? 'text-blue-500' : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "monitoring")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__monitoring   pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/monitoring")}
      >
        {/* <ICMonitor
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/monitoring')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "secrets")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__secrets   pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/secrets")}
      >
        {/* <Fingerprint
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/secrets') ? 'text-blue-500' : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "user-management")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__user   pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/user-management")}
      >
        {/* <ICPeoples
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/user-management')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "integrations")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__integration   pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/integrations")}
      >
        {/* <SettingsInputComposite
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/integrations')
              ? 'text-blue-500'
              : 'text-gray-400'
          )}
        /> */}
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "audit")}
        onMouseLeave={hideSubMenu}
        className="reactour-dashboard__audit   pl-7 flex !justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/audit")}
      >
        {/* <RecentActorsIcon
          className={classNames(
            'w-6 h-6 ',
            pathname.startsWith('/audit') ? 'text-blue-500' : 'text-gray-400'
          )}
        /> */}
      </Button>
    </div>
  );
};
