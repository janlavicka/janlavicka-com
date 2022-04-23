import { useLoaderData, useLocation } from "@remix-run/react";
import { useEffect } from "react";
import * as gtag from "@/utils/gtags.client";

export default function Analytics() {
  const data = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    gtag.pageview(location.pathname);
  }, [location]);

  const renderAnalyticsGoogleCom = () => {
    if (data.env.GA_UA_ID && data.env.GA_V4_ID) {
      return (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${data.env.GA_UA_ID}`}
          />
          <script
            async
            id="gtag-script"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${data.env.GA_UA_ID}', {
                  page_path: window.location.pathname,
                });
                gtag('config', '${data.env.GA_V4_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      );
    } else {
      return <></>;
    }
  };

  return <>{renderAnalyticsGoogleCom()}</>;
}
