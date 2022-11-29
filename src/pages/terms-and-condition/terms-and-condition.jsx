import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import TermsAndConditionStyle from "./terms-and-condition.module.sass";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const TermsAndCondition = () => {
  const [termsAndCon, setTermsAndCon] = useState([
    {
      id: 1,
      title: "Privacy Policy",
      paragraph1:
        "Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et. Mauris risus lectus, tristique at nisl at, pharetra tristique enim.",
      paragraph2:
        "Nullam this is a link nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat eu varius malesuada, pulvinar eu ligula. Ut et adipiscing erat. Curabitur adipiscing erat vel libero tempus congue. Nam pharetra interdum vestibulum. Aenean gravida mi non aliquet porttitor. Praesent dapibus, nisi a faucibus tincidunt, quam dolor condimentum metus, in convallis libero ligula ut",
    },
    {
      id: 2,
      title: "Our Terms",
      paragraph1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.",
      paragraph2:
        "Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.",
    },
  ]);

  const [navigationLinks, setNavigationLinks] = useState([
    {
      id: 1,
      to: "#",
      link: "Welcome Text",
    },
    {
      id: 2,
      to: "#",
      link: "Our Terms",
    },
    {
      id: 3,
      to: "#",
      link: "Conditions",
    },
    {
      id: 4,
      to: "#",
      link: "Your Privacy",
    },
    {
      id: 5,
      to: "#",
      link: "Informations We Collect",
    },
  ]);

  return (
    <>
      {/* Terms And Condition Body */}
      <section className={TermsAndConditionStyle.termsBody}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Terms and Condition Text Box */}
            <Grid item xs={12} lg={8}>
              <Box className={TermsAndConditionStyle.box}>
                {termsAndCon.map((t) => {
                  return (
                    <Box key={t.id}>
                      <h4 className={TermsAndConditionStyle.title}>
                        {t.title}
                      </h4>
                      <p className={TermsAndConditionStyle.paragraph}>
                        {t.paragraph1}
                      </p>
                      <p className={TermsAndConditionStyle.paragraph}>
                        {t.paragraph2}
                      </p>
                    </Box>
                  );
                })}
              </Box>
            </Grid>

            {/* Navigation Links */}
            <Grid item xs={12} lg={4}>
              <Box className={TermsAndConditionStyle.box}>
                <h4 className={TermsAndConditionStyle.title}>Navigation</h4>
                <ul className={TermsAndConditionStyle.linksCon}>
                  {navigationLinks.map((nL) => {
                    return (
                      <li key={nL.id}>
                        <a href={nL.to} className={TermsAndConditionStyle.link}>
                          <PlayArrowIcon
                            sx={{ fontSize: "1rem", marginRight: ".2rem" }}
                          />
                          {nL.link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default TermsAndCondition;
