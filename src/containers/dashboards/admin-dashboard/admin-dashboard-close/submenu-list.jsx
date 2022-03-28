import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const SubmenuItem = styled.div`
  position: absolute;
  top: ${({ position }) => `${+position?.[1]}px`};
  left: ${({ position }) => `${80 + +position?.[0]}px`};

  min-width: 200px;
  border-radius: 5px;
  padding: 20px 10px 0 10px;
  background-color: transparent;
  z-index: 150 !important;
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  &:hover {
    display: block !important;
  }
`

export const SubmenuList = ({ element, position, setElement }) => {
  return (
    <>
      <SubmenuItem
        className="scrollbar-hide"
        onMouseEnter={() => setElement(element)}
        onMouseLeave={() => setElement('')}
        isSelected={element !== ''}
        position={position}
      >
        <div
          onClick={() => setElement('')}
          className="w-full flex flex-col space-y-2 p-2 bg-gray-900 text-white rounded-[5px] overflow-y-auto scrollbar-hide"
        >
          {getSubMenuItems(element)}
        </div>
      </SubmenuItem>
    </>
  )
}

const LinkItem = ({ url, urlText }) => {
  const { pathname } = useLocation()

  const isDisabled = pathname === url
  return (
    <Link className={`${isDisabled ? 'pointer-events-none' : ''}`} to={url}>
      <div
        className={`rounded text-white hover:bg-gray-700 px-2 hover:cursor-pointer h-10 flex items-center ${
          isDisabled ? 'bg-gray-700' : ''
        }`}
      >
        {urlText}
      </div>
    </Link>
  )
}

const getSubMenuItems = (menu) => {
  switch (menu) {
    case 'environments':
      return (
        <>
          <LinkItem url="/environments" urlText="Environments" />
          <LinkItem url="/environments/provider" urlText="Providers" />
          <LinkItem url="/environments/deployments" urlText="Deployments" />
          <LinkItem
            url="/environments/terraform-module"
            urlText="Terraform Modules"
          />
          <LinkItem
            url="/environments/terraform-bazaar"
            urlText="Terraform Bazaar"
          />
        </>
      )
    case 'applications':
      return (
        <>
          <LinkItem url="/applications" urlText="Applications" />
          <LinkItem url="/applications/deployments" urlText="Deployments" />
          <LinkItem url="/applications/pipeline" urlText="Pipeline helper" />
          <LinkItem url="/applications/mihelper" urlText="MI helper" />
        </>
      )
    case 'fully-managed':
      return (
        <>
          <LinkItem url="/fully-managed/applications" urlText="Applications" />
          <LinkItem url="/fully-managed/domains" urlText="Domains" />
        </>
      )
    case 'kubernetes':
      return (
        <>
          <LinkItem url="/kubernetes" urlText="Kubernetes" />
        </>
      )
    case 'databases':
      return (
        <>
          <LinkItem url="/databases" urlText="Databases" />
          <LinkItem url="/databases/sql" urlText="SQL Tools" />
        </>
      )
    case 'cache':
      return (
        <>
          <LinkItem url="/cache/redis" urlText="Redis" />
        </>
      )
    case 'ssl':
      return (
        <>
          <LinkItem url="/ssl" urlText="Ssl" />
        </>
      )
    case 'monitoring':
      return (
        <>
          <LinkItem url="/monitoring" urlText="Metrics" />
          <LinkItem url="/monitoring/alarms" urlText="Alarms" />
          <LinkItem url="/monitoring/notifications" urlText="Notifications" />
          <LinkItem url="/monitoring/incident" urlText="Incident" />
          <LinkItem url="/monitoring/logs" urlText="Logs" />
          <LinkItem
            url="/monitoring/on-call-schedules"
            urlText="On-call Schedules"
          />
          <LinkItem
            url="/monitoring/escalation-policies"
            urlText="Escalation Policies"
          />
        </>
      )
    case 'secrets':
      return (
        <>
          <LinkItem url="/secrets" urlText="Secrets" />
        </>
      )
    case 'user-management':
      return (
        <>
          <LinkItem url="/user-management" urlText="Users" />
          <LinkItem url="/user-management/groups" urlText="Groups" />
          <LinkItem url="/user-management/policies" urlText="Policies" />
        </>
      )
    case 'integrations':
      return (
        <>
          <LinkItem url="/integrations" urlText="Integrations" />
        </>
      )
    case 'audit':
      return (
        <>
          <LinkItem url="/audit" urlText="Login history" />
          <LinkItem url="/audit/audit-manager" urlText="Audit manager" />
        </>
      )

    default:
      return null
  }
}
