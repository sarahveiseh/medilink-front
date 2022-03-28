import { memo, Suspense } from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { indexRoutes } from 'routes/index'
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute'

import { useUi } from 'hooks/use-ui'
import { Toast } from 'components/toast'
import { AdminLayout } from 'layouts/admin'
import { Skeleton } from './skeleton'

export const Router = memo(() => {
  const {
    uiState: { toast },
    toggleToast,
  } = useUi()

  return (
    <BrowserRouter>
      <AdminLayout>
        <Suspense fallback={<Skeleton />}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />
              return (
                <PrivateRoute
                  path={prop.path}
                  component={prop.component}
                  isPublic={prop.isPublic}
                  key={key}
                />
              )
            })}
          </Switch>
        </Suspense>
      </AdminLayout>
      {toast.open && (
        <Toast {...toast} close={() => toggleToast({ open: false })} />
      )}
    </BrowserRouter>
  )
})


