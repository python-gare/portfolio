import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Service</h2>
      <Grid>
        <Card theme={theme}>
              <Content>
                <h4>CREATIVE WEB ENGINEERING</h4>
                <ul>
                  <li>Creative Web Design</li>
                  <li>Retina Ready & Responsive Designs</li>
                  <li>Managed Web Services</li>
                  <li>Website Re-Engineering</li>
                  <li>+ Lot More Creative Services</li>
                </ul>
              </Content>
        </Card>
        <Card theme={theme}>
              <Content>
                <h4>INNOVATIVE SOLUTIONS</h4>
                <ul>
                  <li>Web Application Development</li>
                  <li>Mobile Application Development</li>
                  <li>Chat System Development</li>
                  <li>E-Commerce Solutions</li>
                  <li>Content Management Solutions</li>
                  <li>Portals & Web Services</li>
                  <li>+ Lot More Web Solutions</li>
                </ul>
              </Content>
        </Card>
        <Card theme={theme}>
              <Content>
                <h4>DATA SCIENCE & AI SOLUTIONS</h4>
                <ul>
                  <li>Data Mining</li>
                  <li>Data Science Solutions</li>
                  <li>Natural Language Processing</li>
                  <li>Product Recomedations</li>
                  <li>Conversational AI Chat System</li>
                  <li>Predicting System</li>
                  <li>+ Lot More AI Solutions</li>
                </ul>
              </Content>
        </Card>
        <Card theme={theme}>
              <Content>
                <h4>AUTOMATE TASK</h4>
                <ul>
                  <li>Web Scraping</li>
                  <li>Working With Spreadsheets and pdf</li>
                  <li>Auto Replay System</li>
                  <li>+ Lot More Automate Services</li>
                </ul>
              </Content>
        </Card>
      </Grid>
    </Wrapper>
  );
};
