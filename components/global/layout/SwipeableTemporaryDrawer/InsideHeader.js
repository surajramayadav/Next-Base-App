import Link from "next/link";
import Image from "next/image";
import styles from "@styles/components/SwipeableTemporaryDrawer.module.css";
import Logo from "@images/global/logo.png";



export const InsideHeader = ({handleCloseDrawer}) => {
    return (
        <>
            <div className={`${styles["inside-m-header"]}`}   >
                <Link href="/">
                    <div style={{ paddingTop: "5px", cursor: "pointer", width: "120px", height: "50px", position: "relative", zIndex: 1 }}
                    >
                        <Image src={Logo} height={50} width={60} alt="Company logo" />

                    </div>
                </Link>
                <div style={{ zIndex: 1 }}>
                    <div style={{ color: "rgb(105 102 199)" }} onClick={()=>handleCloseDrawer()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="currentColor"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>

                </div>
            </div>
        </>
    )
}
