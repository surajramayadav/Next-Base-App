import { Grid } from "@material-ui/core";
import styles from "@styles/components/Header.module.css";
import { useRouter } from "next/router";

import Link from "next/link";
import { useState } from "react";

export const NavbarMenuList = ({ data, selectedItem }) => {
  console.log(">>>>", typeof data, data);
  const router = useRouter();

  const [noOfRows, setNoOfRows] = useState()

  return (
    <>
      {data.length != 0 &&
        data[0].data.map((d, i) => {
          console.log("data>>>>", data[0].data.length);

          return (
            <>
              <Grid item md={12} sm={12}>
                {/* <div className={`${styles.dropDownList}`}>
                  <h3>{d.title}</h3>
                  {d.subMenu.map((dd, index) => {
                    return (
                      <>
                        <Link key={index} href={`/${dd.gotoPage}`}>
                          <p
                            className={`${styles.MenuItems} ${
                              dd.gotoPage == router.pathname &&
                              styles.MenuItemsActive
                            }`}
                          >
                            {dd.title}
                          </p>
                        </Link>
                      </>
                    );
                  })}
                </div> */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    borderBottom: (data[0].data.length > 1) && ((data[0].data.length - 1 != i) && "1px solid rgba(211, 215, 222, 0.404)"),
                    padding: "2rem 0rem"
                  }}> 
                  <div style={{ flex: 0.3 }}>
                    <h3 className={`${styles.gridHeader}`}>{d.title}</h3>
                  </div>
                  <div style={{ flex: 0.7 }}>
                    <div className={`${styles.gridContainer}`}>
                      {d.subMenu.map((dd, index) => {
                        return (
                          <>
                            <div className={`${styles.gridItem}`}>
                              <Link key={index} href={`/${dd.gotoPage}`}>
                                <p
                                  className={`${styles.MenuItems} ${dd.gotoPage == router.pathname &&
                                    styles.MenuItemsActive
                                    }`}
                                >
                                  {dd.title}
                                </p>
                              </Link>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>




              </Grid>
            </>
          );
        })}
    </>
  );
};
