import SwipeableTemporaryDrawer from "@components/global/layout/SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";
 
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "@images/global/logo.png";

export const MobileHeader = () => {

    const [activeDropdown, setActiveDropdown] = useState("");

    return (
        <div
            style={{
                display: "flex",
                // backgroundColor: "#fbfbfc",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 0.5rem 1rem 1.5rem",
                backgroundColor : "#02042b"
            }}
        >
            <Link href="/">
                <div
                    style={{
                        paddingTop: "5px",
                        cursor: "pointer",
                        width: "120px",
                        height: "50px",
                        position: "relative",
                        zIndex: 1,
                    }}
                    onMouseEnter={() => {
                        setActiveDropdown("");
                    }}
                >
                    <Image src={Logo} height={50} width={60} alt="Company logo" />

                </div>
            </Link>
            <div
                style={{
                    zIndex: 1, 
                }}
            >
                <SwipeableTemporaryDrawer />
            </div>
        </div>
    )
}
