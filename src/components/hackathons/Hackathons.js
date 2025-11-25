import React from "react";
import Style from "./Hackathons.module.scss";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Hackathons({ innerRef }) {
  return (
    <Box
      ref={innerRef}
      id="hackathons"
      mt={"3rem"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h1 className={Style.title}>Hackathons</h1>

      <div className={Style.timeline}>
        {info.hackathons.map((h, idx) => (
          <div key={idx} className={Style.event}>
            
            {/* Timeline Dot */}
            <div className={Style.dot}></div>

            {/* Slanted Card */}
            <div className={`${Style.card} ${idx % 2 === 0 ? Style.left : Style.right}`}>
              
              {/* Diagonal image */}
              {h.image && <img src={h.image} alt={h.title} className={Style.image} />}

              {/* Text box */}
              <div className={Style.content}>
                <h2 className={Style.name}>{h.title}</h2>
                <p className={Style.date}>{h.date}</p>
                <p className={Style.desc}>{h.description}</p>
                <p className={Style.role}>{h.role}</p>

                <div className={Style.links}>
                  {h.links?.code && <a href={h.links.code} target="_blank" rel="noopener noreferrer">Code</a>}
                  {h.links?.certificate && <a href={h.links.certificate} target="_blank" rel="noopener noreferrer">Certificate</a>}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
