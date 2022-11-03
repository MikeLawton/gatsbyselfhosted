import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import Nav from "../components/Nav";

export default function Homepage() {
  const data = useStaticQuery(graphql`
    query Homepage {
      wpPage(title: { eq: "Homepage" }) {
        acfHomepage {
          heading
          text
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const { heading, image, text } = data.wpPage.acfHomepage;

  return (
    <>
      <Nav />
      <h2>{heading}</h2>
      <div className="text">
        <p>Here's some text for the Home page.</p>
        {parse(text)}
      </div>
      <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} />
    </>
  );
}
