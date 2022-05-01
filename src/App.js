/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import section1Styles from './Screen_section1.module.scss';
import section2Styles from './Screen_section2.module.scss';
import section3Styles from './Screen_section3.module.scss';
import section4Styles from './Screen_section4.module.scss';
import styles from './Screen.module.scss';

function renderSection1(props) {
  return (
    <section
      className={cn(section1Styles.section1, section1Styles.section1_layout)}>
      <div className={cn(section1Styles.block2, section1Styles.block2_layout)}>
        <div
          style={{
            '--src': `url(${
              require('assets/19f35ec2252d9cf5f8027f01dc6affca.png').default 
            })`,
            'right':'-150px'
          }}
          className={cn(
            section1Styles.decorator3,
            section1Styles.decorator3_layout
          )}
        />
        <div
          style={{
            '--src': `url(${
              require('assets/cd234274207325d9da23b6d6cbbdd7d5.png').default
            })`,
            'left':'-170px'
          }}
          className={cn(
            section1Styles.decorator2,
            section1Styles.decorator2_layout
          )}
        />

        <div className={cn(section1Styles.group, section1Styles.group_layout1)}>
          <div className={cn(section1Styles.box, section1Styles.box_layout)} />

          <div className={cn(section1Styles.flex, section1Styles.flex_layout)}>
            <div
              className={cn(section1Styles.flex1, section1Styles.flex1_layout)}>
              <div className={cn(section1Styles.flex1_item)} id='title'>
                <a href='#' style={{"text-decoration": "none"}}>
                  <h1
                    className={cn(
                      section1Styles.big_title1,
                      section1Styles.big_title1_layout
                    )}>
                    {'ImPerfect'}
                  </h1>
               </a>
              </div>
              <div className={cn(section1Styles.flex1_spacer)} />
              <div className={cn(section1Styles.flex1_item)} 
               onClick={() => {
                const anchor = document.querySelector('#about-us')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
               }}
               style={{"cursor":"pointer"}} 
              >
                <h1
                  className={cn(
                    section1Styles.big_title3,
                    section1Styles.big_title3_layout
                  )}>
                  {'О нас'}
                </h1>
              </div>
              <div className={cn(section1Styles.flex1_spacer1)} />
              <div className={cn(section1Styles.flex1_item)}
               onClick={() => {
                const anchor = document.querySelector('#our-goal')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
               }}
               style={{"cursor":"pointer"}} 
              >
                <h1
                  className={cn(
                    section1Styles.big_title3,
                    section1Styles.big_title2_layout
                  )}>
                  {'Наша цель'}
                </h1>
              </div>
              <div className={cn(section1Styles.flex1_spacer2)} />
              <div className={cn(section1Styles.flex1_item)} 
              onClick={() => {
                const anchor = document.querySelector('#contacts')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
               }}
               style={{"cursor":"pointer"}} 
              >
                <h1
                  className={cn(
                    section1Styles.big_title2,
                    section1Styles.big_title2_layout
                  )}>
                  {'Контакты'}
                </h1>
              </div>
            </div>

            <div
              className={cn(section1Styles.flex2, section1Styles.flex2_layout)}>
              <div className={cn(section1Styles.flex2_item)}>
                <div
                  className={cn(
                    section1Styles.flex3,
                    section1Styles.flex3_layout
                  )}>
                  <h1
                    className={cn(
                      section1Styles.hero_title5,
                      section1Styles.hero_title5_layout
                    )}
                    style={{'fontWeight':'bold'}}
                    >
                    {'Информационный проект о вреде стандартов красоты'}
                  </h1>
                  <px-posize
                    x="86fr 94px 156fr"
                    y="39px 61px 0px"
                    lg-x="86fr 94px 156fr"
                    lg-y="34px 61px 0px"
                    md-x="86fr 94px 156fr"
                    md-y="28px 61px 0px"
                    sm-x="86fr 94px 156fr"
                    sm-y="23px 61px 0px"
                    xs-x="86fr 94px 156fr"
                    xs-y="21px 61px 0px"
                    xxs-x="86fr 94px 156fr"
                    xxs-y="18px 61px 0px"
                    tn-x="86fr 94px 156fr"
                    tn-y="17px 61px 0px">
                    <div
                      className={cn(section1Styles.image6)}
                      style={{
                        '--src': `url(${
                          require('assets/9449887cabaab05fadf8339388d1cfc6.png')
                            .default
                        })`
                      }}
                    />
                  </px-posize>
                </div>
              </div>
              <div className={cn(section1Styles.flex2_spacer)} />
              <div className={cn(section1Styles.flex2_item1)}>
                <div
                  style={{
                    '--src': `url(${
                      require('assets/f561bf3dc9e75426629d79fc97de60d3.png')
                        .default
                    })`
                  }}
                  className={cn(
                    section1Styles.group1,
                    section1Styles.group1_layout
                  )}>
                  <div
                    className={cn(
                      section1Styles.block3,
                      section1Styles.block3_layout
                    )}>
                    <div
                      className={cn(
                        section1Styles.group,
                        section1Styles.group_layout
                      )}>
                      <div
                        style={{
                          '--src': `url(${
                            require('assets/6a850a45be091d75386d0de4405b42da.png')
                              .default
                          })`
                        }}
                        className={cn(
                          section1Styles.image4,
                          section1Styles.image4_layout
                        )}
                      />
                      <div
                        style={{
                          '--src': `url(${
                            require('assets/b9b0d7cad7589e370e198134025c1b06.png')
                              .default
                          })`
                        }}
                        className={cn(
                          section1Styles.image5,
                          section1Styles.image5_layout
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section
      className={cn(section2Styles.section2, section2Styles.section2_layout)}>
      <div className={cn(section2Styles.flex4, section2Styles.flex4_layout)}>
        <div className={cn(section2Styles.flex5, section2Styles.flex5_layout)}>
  
          <div className={cn(section2Styles.flex5_item)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/48a44a129fd49f3eb5079642339fd37c.png').default
                })`
              }}
              className={cn(
                section2Styles.image2,
                section2Styles.image2_layout
              )}
            />
          </div>
          <div className={cn(section2Styles.flex5_spacer)} />
          <div className={cn(section2Styles.flex5_item1)}>
            <div
              className={cn(section2Styles.flex6, section2Styles.flex6_layout)} id='about-us'>
                 <div>
            <div
              style={{
                '--src': `url(${
                  require('assets/Group 1.png').default
                })`,
                'width':'100%',
                'height':'70px',
              }}
              className={cn(
                section2Styles.image1,
                section2Styles.image1_layout
              )}
            />
            
          </div>
              <h1
                className={cn(
                  section2Styles.hero_title4,
                  section2Styles.hero_title4_layout
                )}>
                {'Кто мы?'}
              </h1>
              <h1
                className={cn(
                  section2Styles.big_title,
                  section2Styles.big_title_layout
                )}>
                {
                  'ImPerfect является проектом созданным для информированию на тему стандартов красоты для женщин и об их недостижимости. Стандарты красоты это навязанные обществом нормы и не соответствие им часто ведет к осуждению большинства. По этой причине девушки и женщины прибегают или размышляют о различных методах изменения внешности что зачастую ведет к ментальным и даже физическим проблемам. '
                }
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection3(props) {
  return (
    <section
      className={cn(section3Styles.section3, section3Styles.section3_layout)}>
      <div className={cn(section3Styles.flex7, section3Styles.flex7_layout)}>
      <div className={cn(section2Styles.group, section2Styles.group_layout1)}>
          <div>
            <div
              style={{
                '--src': `url(${
                  require('assets/Group 1.png').default
                })`,
                'width':'1440px',
                'height':'70px',
                'paddingBottom':'50px'
              }}
              className={cn(
                section2Styles.image1,
                section2Styles.image1_layout
              )}
            />
            
          </div>
        </div>

        <div className={cn(section3Styles.flex8, section3Styles.flex8_layout)} id='our-goal'>
          <div className={cn(section3Styles.flex8_item)}>
            <div
              className={cn(section3Styles.flex9, section3Styles.flex9_layout)}>
              <h1
                className={cn(
                  section3Styles.hero_title4,
                  section3Styles.hero_title4_layout
                )}>
                {'Наша цель'}
              </h1>
              <h1
                className={cn(
                  section3Styles.big_title,
                  section3Styles.big_title_layout
                )}>
                {
                  'Наша цель это рассказать и показать как можно большему количеству людей разбирая происхождение, вред и почему иметь такую черту абсолютно нормально и показывая что вы не одни боритесь с данным комплексом определённого элемента стандарта красоты о проблематичности которых некоторые люди даже не догадываются.'
                }
              </h1>
            </div>
          </div>
          <div className={cn(section3Styles.flex8_item1)}>
            <div
              style={{
                '--src': `url(${
                  require('assets/bf2cae1b1f7ad7ce0a95c4c69105826c.png').default
                })`
              }}
              className={cn(
                section3Styles.image2,
                section3Styles.image2_layout
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection4(props) {
  return (
    <section
      className={cn(section4Styles.section4, section4Styles.section4_layout)}>
      <div className={cn(section4Styles.block1, section4Styles.block1_layout)}>
        <div
          style={{
            '--src': `url(${
              require('assets/42a2ccf7acfec4ce8f5b4705808f8ee9.png').default
            })`
          }}
          className={cn(
            section4Styles.decorator1,
            section4Styles.decorator1_layout
          )}
        />
        <div
          style={{
            '--src': `url(${
              require('assets/6631448689578d02ebb9166976144797.png').default
            })`
          }}
          className={cn(
            section4Styles.decorator,
            section4Styles.decorator_layout
          )}
        />

        <div
          className={cn(section4Styles.flex10, section4Styles.flex10_layout)}
          style={{'marginTop':'150px'}}
          >
         
          <div>
              <div
                style={{
                  '--src': `url(${
                    require('assets/Group 1.png').default
                  })`,
                  'width':'1440px',
                  'height':'70px',
                }}
                className={cn(
                  section2Styles.image1,
                  section2Styles.image1_layout
                )}
              />
              
            </div>

          <div
            className={cn(section4Styles.flex11, section4Styles.flex11_layout)}>
            <div className={cn(section4Styles.flex11_item)} id='contacts'>
              <h1
                className={cn(
                  section4Styles.hero_title_box,
                  section4Styles.hero_title_box_layout
                )}>
                <pre className={cn(section4Styles.hero_title1)} style={{ 'text-shadow': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
                  {'Свяжитесь с нами: '}
                </pre>
              </h1>
            </div>
            <div className={cn(section4Styles.flex11_spacer)} />
            <div className={cn(section4Styles.flex11_item1)}>
              <h1
                className={cn(
                  section4Styles.hero_title1_box,
                  section4Styles.hero_title1_box_layout
                )}>
                <pre className={cn(section4Styles.hero_title1)} style={{ 'text-shadow': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>
                  {'Нужна помощь?\nИспользуйте наш телеграм-бот: '}
                </pre>
              </h1>
            </div>
          </div>

          <div
            className={cn(section4Styles.flex12, section4Styles.flex12_layout)}>
            <div className={cn(section4Styles.flex12_item)}>
              <div
                className={cn(
                  section4Styles.flex13,
                  section4Styles.flex13_layout
                )}>
                <div
                  style={{
                    '--src': `url(${
                      require('assets/6fab3ac2110c67d119cafc5775138565.png')
                        .default
                    })`
                  }}
                  className={cn(
                    section4Styles.icon,
                    section4Styles.icon_layout
                  )}
                />
                <div
                  style={{
                    '--src': `url(${
                      require('assets/1ed5395c02447d542519b7df8a7b962e.png')
                        .default
                    })`
                  }}
                  className={cn(
                    section4Styles.icon1,
                    section4Styles.icon1_layout
                  )}
                />
              </div>
            </div>
            <div className={cn(section4Styles.flex12_spacer)} />
            <div className={cn(section4Styles.flex12_item1)}>
              <div
                className={cn(
                  section4Styles.flex14,
                  section4Styles.flex14_layout
                )}>
                <a href='https://www.instagram.com/imperfect_kz/' style={{"text-decoration":"none"}}>
                  <h1
                    className={cn(
                      section4Styles.hero_title2,
                      section4Styles.hero_title2_layout
                    )}>
                    {'@imperfect_kz'}
                  </h1>
                </a>
                <a href='https://www.google.com/intl/ru/gmail/about/policy/' style={{"text-decoration":"none"}}>
                  <h1
                    className={cn(
                      section4Styles.hero_title2,
                      section4Styles.hero_title2_layout1
                    )}>
                    {'example@gmail.com'}
                  </h1>
                </a>
              </div>
            </div>
            <div className={cn(section4Styles.flex12_spacer1)} />
            <div className={cn(section4Styles.flex12_item2)}>
              <div
                style={{
                  '--src': `url(${
                    require('assets/a9c7f93782e9c094e28e1258235801b1.png')
                      .default
                  })`,
                  'right':'-100px'
                }}
                className={cn(
                  section4Styles.group1,
                  section4Styles.group1_layout
                )}>
                <a href='https://t.me/botfather' style={{"text-decoration":"none"}}>
                  <h1
                    className={cn(
                      section4Styles.hero_title3,
                      section4Styles.hero_title3_layout
                    )}>
                    {'@PerfectBot'}
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Screen(props) {
  return (
    <main className={`screen ${cn(styles.main, styles.main_layout)}`} style={{"backgroundColor":"#FDF7F2"}}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
    </main>
  );
}

Screen.inStorybook = true;
