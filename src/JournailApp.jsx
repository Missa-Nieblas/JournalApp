import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const JournailApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>

  )
}
