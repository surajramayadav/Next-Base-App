import { Grid } from "@material-ui/core";

export const FooterList = () => {
  return (
    <>
      <Grid item md={3} sm={12}>
        <div style={{ marginInline: "0rem 2rem" }}>
          <p
            style={{
              borderBottom: "1px solid white",
              padding: "1rem 0.5rem",color:'white'
            }}
          >
            Top Services
          </p>
          <div style={{ padding: "2rem 0rem" }}>
            <li style={{ marginBottom: 8 ,color:'white'}}>Private Limited Company</li>
            <li style={{ marginBottom: 8 ,color:'white'}}>GST Registration</li>
            <li style={{ marginBottom: 8 ,color:'white'}}>Company Valuation</li>
            <li style={{ marginBottom: 8 ,color:'white'}}>Business Advisory</li>
            <li style={{ marginBottom: 8 ,color:'white'}}>Digital Signature</li>

           
          </div>
        </div>
      </Grid>
    </>
  );
};
