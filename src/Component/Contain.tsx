import React from 'react'
import Form from './Form'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Contain() {
  return (
        <>
          <section className='scale'>
              <div className='row'>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="scale-left-section">
                      <div className='scale-header'>
                        <h1 className='scale-header-text'>Scale your enterprise with cross-border teams</h1>
                      </div>
                      <div className='scale-center-text'>
                        <p>
                          <span>Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.</span>
                        </p>
                      </div>
                      <div className='scale-button'>
                        <Link to="#" className='button-style'>BUILD YOUR TEAM</Link>
                      </div>
                    </div>
                    <div className="scale-right-section">
                        <div className="scale-right-img">
                          <img className='img' src="assets/image/scale.jpg" alt="" />
                        </div>
                    </div>
                  </div>
                <div className="col-md-1"></div>
              </div>
              <div className="clr"></div>
          </section>

          <section className='pwrteams'>
              <div className='row'>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <div className="pwrteams-left-section">
                      <div className="pwrteams-left-img">
                        <img className='img' src="assets/image/pwrteams.jpg" alt="" />
                      </div>
                  </div>
                  <div className="pwrteams-right-section">
                    <div className='pwrteams-header'>
                      <p><span className="pwrteams-header-text">We’re pwrteams</span></p>
                    </div>
                    <div className='pwrteams-center-text'>
                      <p>
                        <span>We build your IT organizations in Eastern Europe, in the Baltics, and Balkan countries. We stand out for the talent of our people, team stability and 100% transparent business model.</span>
                      </p>
                    </div>
                    <div className='pwrteams-button'>
                      <Link to="#" className='button-style'>ABOUT US</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
              <div className="clr"></div>
          </section>

          <section className='expert-teams'>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                  <div className="expert-header-text">
                    <p>
                      <span className='expert-header-team'>Expert cross-border teams</span>
                    </p>
                    <h1 className='expert-text-header-text-help'>We’ll help you to get the right team</h1>
                    <div className="clr"></div>
                  </div>
                  <div className='export-team-blog-section'>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/software-development.png" alt="" />
                      <p className='team-blog-header'><span>Software Development</span></p>
                      <p className='team-blog-des'><span>Whether it’s a simple website or a sophisticated IoT system, if you have a legacy in your code or work in R&D with the latest technologies, we will build you the perfect development team.</span></p>
                    </div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/qa-and-testing.png" alt="" />
                      <p className='team-blog-header'><span>QA and Testingt</span></p>
                      <p className='team-blog-des'><span>Let us create a dedicated QA team for full-time engagement or on an as-needed basis. Our seasoned experts will support your entire QA cycle up to your specific needs.</span></p>
                    </div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/operation.png" alt="" />
                      <p className='team-blog-header'><span>24/7 Operations</span></p>
                      <p className='team-blog-des'><span>Allow us to create the perfect Support team for you, covering all operational issues for your products, applications, and infrastructure while meeting all your standards and requirements.</span></p>
                    </div>
                    <div className="clr"></div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/AI-BI-and-Data-Science.png" alt="" />
                      <p className='team-blog-header'><span>AI, BI and Data Science</span></p>
                      <p className='team-blog-des'><span>Set up a team with unique expertise. Whether you need one genius with a PhD in the concrete industry to set up the whole architecture, or a whole team of them, we can help.</span></p>
                    </div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/Cloud-and-DevOps.png" alt="" />
                      <p className='team-blog-header'><span>Cloud and DevOps</span></p>
                      <p className='team-blog-des'><span>Our team can build your software infrastructures and process big data in the cloud. Top software architects and IT gurus who will become an integral part of your team.</span></p>
                    </div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/Engineering-and-Automation.png" alt="" />
                      <p className='team-blog-header'><span>Engineering and Automation</span></p>
                      <p className='team-blog-des'><span>Do you need software engineering, electrical design, and electrical engineering experts? We can scale your organization with true experts helping you to reach your goals.</span></p>
                    </div>
                  </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </section>

          <section className='services'>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                  <div className="services-header-text">
                    <p>
                      <span className='services-header'>Our services</span>
                    </p>
                    <h1 className='services-header-text'>What we do</h1>
                  </div>
                  <div className='services-dadicated-team'>
                    <div className="services-left-section">
                      <div className='services-header'>
                        <h1 className='services-header-text'>Dedicated Teamsr teams</h1>
                      </div>
                      <div className='services-center-text'>
                        <p>
                          <span>We build stable cross-border organizations with the best IT and engineering talent in Eastern Europe. We match top-notch professionals to your company’s culture, processes, and tools for perfect cooperation. Creating this harmony is essential to us, since it leads to full commitment from your dedicated team, and also leaves you in total control of your nearshore operations.</span>
                        </p>
                      </div>
                      <div className='services-button'>
                        <Link to="#" className='button-style'>LEARN MORE</Link>
                      </div>
                    </div>
                    <div className="services-right-section">
                        <div className="services-right-img">
                          <img className='img' src="assets/image/dadicated-team-meeting.jpg" alt="" />
                        </div>
                    </div>
                    <div className="clr"></div>
                  </div>
                  <div className="services-lab">
                    <div className="lab-left-section">
                      <div className='lab-header'>
                        <h1 className='lab-header-text'>TestLab</h1>
                      </div>
                      <div className='lab-center-text'>
                        <p>
                          <span>We test your business solutions, mobile apps, web portability, APIs,  and  back-end integration. From large systems to iPhones, or Androids to tablets and laptops, we can start testing within 24 hours of contract finalization.</span>
                        </p>
                      </div>
                      <div className='lab-button'>
                        <Link to="#" className='button-style'>LEARN MORE</Link>
                      </div>
                    </div>
                    <div className="lab-right-section">
                      <div className='lab-header'>
                        <h1 className='lab-header-text'>Mobile Lab</h1>
                      </div>
                      <div className='lab-center-text'>
                        <p>
                          <span>Construct 5-star mobile solutions, from brainstorming to post-delivery support with the dedicated mobile team. We serve you with an experienced, scalable, and well-balanced talent pool to support your growth, for long-term and short-term projects.</span>
                        </p>
                      </div>
                      <div className='lab-button'>
                        <Link to="#" className='button-style'>LEARN MORE</Link>
                      </div>
                    </div>
                    <div className="clr"></div>
                  </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </section>

          
          <section className='work'>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                  <div className="work-header-text">
                    <p>
                      <span className='work-header-team'>How we work</span>
                    </p>
                    <h1 className='work-header-text-help'>This is how we make a difference</h1>
                    <div className="clr"></div>
                  </div>
                  <div className='work-blog-section'>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/profile-match.png" alt="" />
                      <p className='team-blog-header'><span>Best profile match</span></p>
                      <p className='team-blog-des'><span>You decide — carefully select the best people to match your IT & engineering needs, language requirements and company culture.</span></p>
                    </div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/stay-in-control.png" alt="" />
                      <p className='team-blog-header'><span>Stay in control</span></p>
                      <p className='team-blog-des'><span>We build bridges, not walls— our engineers work as part of your cross-border organization while we take care of all supporting services.</span></p>
                    </div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/you-call-the-shots.png" alt="" />
                      <p className='team-blog-header'><span>You call the shots</span></p>
                      <p className='team-blog-des'><span>We follow your preferences – from tools, policies, processes, and methodologies all the way up to company culture and style.</span></p>
                    </div>
                    <div className="clr"></div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/transparent.png" alt="" />
                      <p className='team-blog-header'><span>Transparent pricing model</span></p>
                      <p className='team-blog-des'><span>We actively seek to build trust. This is why we set a transparent pricing model from the very beginning.</span></p>
                    </div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/not-locked-in.png" alt="" />
                      <p className='team-blog-header'><span>Not locked-in</span></p>
                      <p className='team-blog-des'><span>No volume requirements. No exit fees. Start as large or small as you’d like, and scale up or down your team as you go.</span></p>
                    </div>
                    <div className="team-blog-left">
                      <img className='team-blog-img' src="assets/image/harmony-and-stability.png" alt="" />
                      <p className='team-blog-header'><span>Team harmony and stability</span></p>
                      <p className='team-blog-des'><span>We have one of the highest employee retention rates in the industry. The secret is simple – we find people who love what they do and support them.</span></p>
                    </div>
                  </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </section>

          <section className='awards'>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                  <div className="awards-header-text">
                    <p>
                      <span className='awards-header-team'>Our awards and recognitions</span>
                    </p>
                    <h1 className='awards-header-text-help'>We’re the best in B2B IT Services</h1>
                    <div className="clr"></div>
                  </div>
                  <div className='awards-blog-section'>
                    <div className="awards-blog-left">
                      <p className='awards-blog-des'><span>Clutch Global Best 1000 B2B Award 2020</span></p>
                      <a href='' className="awards-learn">Learn more</a>
                    </div>
                    <div className="awards-blog-left">
                      <p className='awards-blog-des'><span>Global Top 1% Outsourcing Leader by Accelerance</span></p>
                      <a href='' className="awards-learn">Learn more</a>
                    </div>
                    <div className="awards-blog-left">
                      <p className='awards-blog-des'><span>Top Outsourcing Companies of2021 by Designrush</span></p>
                      <a href='' className="awards-learn">Learn more</a>
                    </div>
                    <div className="clr"></div>
                  </div>
                  <div className='awards-button'>
                    <Link to="#" className='button-style'>ALL AWARDS</Link>
                    <div className="clr"></div>
                  </div>
                  
              </div>
              <div className="col-md-1"></div>
            </div>
          </section>

          <Form />
        </>
  )
}

export default Contain