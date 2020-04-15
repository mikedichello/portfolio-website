import PropTypes from 'prop-types'
import React from 'react'
import mike from '../images/pic01.jpg'
import resume from '../images/pic02.jpg'
import lorem from '../images/Lorem-Collage.jpg'
import pdf from '../images/Resume.pdf'
import pieCharter from '../images/pie-charter.jpg'
import plotMaster from '../images/plotMaster.jpg'
import rustic from '../images/rustic.jpg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={mike} alt="it-me" />
          </span>
          <p>
            As a software engineer, I am able to merge both creative and logical thinking
            motivated by an unending craving to create, and challenge myself to answer
            tough questions, and solve puzzles.
          </p>
          <p>
            My passion as a performer allowed me to develop exceptional interpersonal
            skills, and the ability to improvise.
          </p>
          <p>
            My previous experience in customer service, and customer-focused sales,
            and my constant flow of new ideas, lead to creative, customer-centric
            applications with user experience at the forefront.
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/michael-dichello/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mikedichello"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <span className="image main">
            <img src={resume} alt="Mike's Resume" />
          </span>  

          <a href={pdf} download="Michael-DiChello-Resume">Download Resume Here</a>         
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          <span className="image main">
            <img src={rustic} alt="" />
          </span>
          <h2 className="major">Rustic Barkeep</h2>        
          <p>
          A full-stack E-Commerce landing page demo selling home bartending supplies. Using ReactJS, Strapi, and Snipcart. 
          </p>          
          <a className="button link" style={{margin:20 + "px"}} target="_blank" rel="noopener noreferrer" href="https://rustic-barkeep.herokuapp.com/">View Demo</a> <a className="button link" style={{margin:10 + "px"}} target="_blank" rel="noopener noreferrer" href="https://github.com/mikedichello/rustic-barkeep-frontend">View Code</a>
          
          <span className="image main">
            <img src={pieCharter} alt="" />
          </span>
          <h2 className="major">Pie-Charter</h2>        
          <p>
          Pie Charter is a meal macronutrient log app. The user can input the meal macronutrients (Calories, Net Grams of Carbs, Fat, and Protein) and recall a quick visual overview of meal. 
          </p>          
          <a className="button link" style={{margin:20 + "px"}} target="_blank" rel="noopener noreferrer" href="https://pie-charter-app.herokuapp.com/">View Demo</a> <a className="button link" style={{margin:10 + "px"}} target="_blank" rel="noopener noreferrer" href="https://github.com/mikedichello/meal_planner">View Code</a>
          
          
          <span className="image main">
            <img src={lorem} alt="" />
          </span>
          <h2 className="major">Lorem-Simpson</h2>        
          <p>
          Lorem Simpson is a full-stack CRUD (Create, Read, Update, Delete) application that allows for users to randomly generate filler text based on Lorem Ipsum, but with quotes from the television show, The Simpsons.
          </p>          
          <a className="button link" style={{margin:20 + "px"}} target="_blank" rel="noopener noreferrer" href="http://lorem-simpson.herokuapp.com/">View Demo</a> <a className="button link" style={{margin:10 + "px"}} target="_blank" rel="noopener noreferrer" href="https://github.com/mikedichello/Lorem_Simpson">View Code</a>
          
          <span className="image main">
            <img src={plotMaster} alt="" />
          </span>
          <h2 className="major">Plot Master</h2>        
          <p>
          Plot Master is a full-stack application which enables users to plan and visualize garden plots. Users are able to create plots of custom dimensions, populate these plots with their choice of plants, save plots to their user profile, and edit or delete their plots. Users also may view a custom-generated chart of all plants in their plot along with planting and harvesting timelines, and a reference page with information about all plants in the database. 
          </p>          
          <a className="button link" style={{margin:20 + "px"}} target="_blank" rel="noopener noreferrer" href="https://plot-master.herokuapp.com/#/">View Demo</a> <a className="button link" style={{margin:10 + "px"}} target="_blank" rel="noopener noreferrer" href="https://github.com/mikedichello/plot-master">View Code</a>
          
          {close}
        </article>        
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
