import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const MemberCard = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityTeam {
        edges {
          node {
            description
            name
            members {
              name
              role
              yearJoined
              image {
                asset {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
      `)
}