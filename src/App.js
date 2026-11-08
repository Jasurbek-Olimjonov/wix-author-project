import './App.css';

function App() {
    return (
        <>
            <img
                className="background"
                src="https://static.wixstatic.com/media/ad420a_0966fded081b4a12988a616e305424d1~mv2.jpg/v1/fill/w_958,h_896,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_0966fded081b4a12988a616e305424d1~mv2.jpg"
                alt="dark forest"
            />
            <div className="social">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
            </div>
            <div className="higher">
                <div className="contain">
                    <header>
                        <h1>K. Griffith</h1>
                        <ul>
                            <li>
                                <a href="#">APPEARANCES</a>
                            </li>
                            <li>
                                <a href="#">BOOKS</a>
                            </li>
                            <li>
                                <a href="#">NEWS</a>
                            </li>
                            <li>
                                <a href="#">ABOUT</a>
                            </li>
                            <li>
                                <a href="#">CONTACT</a>
                            </li>
                        </ul>
                    </header>
                </div>
                <div className="author cont">
                    <img
                        src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-11967148821.jpg"
                        alt="author here"
                    />
                    <div>
                        <h1>Kayla Griffith</h1>
                        <p>Award Winning Author</p>
                    </div>
                </div>
            </div>
            <div className="rough">
                <div className="novel cont">
                    <div className="bookmark">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="33"
                            viewBox="0 0 200 33"
                            role="img"
                            aria-label="New Release"
                        >
                            <path d="M0 0h200v33H0l12-16.5z" fill="#fe805d" />
                            <text
                                x="75"
                                y="22"
                                fill="black"
                                fontFamily="Arial, sans-serif"
                                fontSize="16"
                                textAnchor="middle"
                                transform="rotate(180 89 16.5)"
                            >
                                New Release
                            </text>
                        </svg>
                        <h2>The Swan Isle (2035)</h2>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click
                            me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your
                            users know a little more about you.
                        </p>
                        <h1>Order Now</h1>
                        <div className="buttons">
                            <button>Amazon</button>
                            <button>Google</button>
                            <button>ibooks</button>
                        </div>
                    </div>
                    <img
                        src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="quotes">
                <div className="three">
                    <h1 className="labeler">Praise & Reviews</h1>
                    <svg
                        class="mark"
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="33"
                        viewBox="0 0 70 33"
                        role="img"
                        aria-label="New Release"
                    >
                        <path d="M0 0h200v33H0l12-16.5z" fill="#fe805d" />
                    </svg>
                    <div className="three-quote">
                        <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 44" aria-hidden="true">
                                <path d="M4 5h20v14c0 9-4 16-12 21l-6-8c4-3 6-6 6-9H4V5zm32 0h20v14c0 9-4 16-12 21l-6-8c4-3 6-6 6-9h-8V5z" />
                            </svg>
                            <p>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
                                click me to add your own content and make changes to the font. I’m a great place for you to tell a story and
                                let your users know a little more about you.
                            </p>
                            <span>‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</span>
                            <span class="line"></span>
                        </div>
                        <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 44" aria-hidden="true">
                                <path d="M4 5h20v14c0 9-4 16-12 21l-6-8c4-3 6-6 6-9H4V5zm32 0h20v14c0 9-4 16-12 21l-6-8c4-3 6-6 6-9h-8V5z" />
                            </svg>
                            <p>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
                                click me to add your own content and make changes to the font. I’m a great place for you to tell a story and
                                let your users know a little more about you.
                            </p>
                            <span>‘Gripping storytelling’ The Good Read Bloh</span>
                            <span class="line"></span>
                        </div>
                        <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 44" aria-hidden="true">
                                <path d="M4 5h20v14c0 9-4 16-12 21l-6-8c4-3 6-6 6-9H4V5zm32 0h20v14c0 9-4 16-12 21l-6-8c4-3 6-6 6-9h-8V5z" />
                            </svg>
                            <p>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
                                click me to add your own content and make changes to the font. I’m a great place for you to tell a story and
                                let your users know a little more about you.
                            </p>
                            <span>Grifith’s voice tells the story of all women “The Seattle Post Review”</span>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upcoming">
                <h1 className="labeler">See Upcoming Appearances</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                <div className="boxes cont">
                    <span>January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</span>
                    <button>Join</button>
                </div>
                <div className="boxes cont">
                    <span>January 31st 2035, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST</span>
                    <button>Join</button>
                </div>
                <div className="boxes cont">
                    <span>March 2nd 2035, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST</span>
                    <button>Join</button>
                </div>
            </div>
            <div className="about">
                <div className="box">
                    <div className="cont">
                        <svg
                            class="mark"llkl
                            xmlns="http://www.w3.org/2000/svg"
                            width="70"
                            height="33"
                            viewBox="0 0 70 33"
                            role="img"
                            aria-label="New Releas"
                        >
                            <path d="M0 0h200v33H0l12-16.5z" fill="#fe805d" />
                        </svg>
                        <img
                            src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-11967148791.jpg"
                            alt=""
                        />
                        <h1 className="labeler">About Kayla Griffith</h1>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click
                            me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your
                            users know a little more about you
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            <footer>
              <p>© 2035 by K.Griffith. Powered and secured by <a href="https://www.wix.com">Wix</a></p>
            </footer>
        </>
    );
}

export default App;
