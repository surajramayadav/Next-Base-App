import { ThemeProvider } from "hooks/context/ThemeProvider";
import { useEffect, useMemo, useState } from "react";
import { persistor, store } from "redux/store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "hoc/Layouts/MainLayout";
import dynamic from "next/dynamic";
import "nprogress/nprogress.css";
function MyApp({ Component, pageProps }) {
  const [theme, settheme] = useState(false);
  const value = useMemo(() => ({ theme, settheme }), [theme, settheme]);
  useEffect(() => {
    if (theme) {
      dynamic(() => import("@styles/dark.css"));
    } else {
      dynamic(() => import("@styles/light.css"));
    }
  }, [theme]);

  const TopProgressBar = dynamic(
    () => {
      return import("@components/global/TopProgressBar");
    },
    { ssr: false }
  );

  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <ThemeProvider.Provider value={value}>
          <TopProgressBar />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider.Provider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
