import React from 'react'

function carrosel() {
  return (
    <div className="carrosel">
        <div id="slide">
            <div className="item" style={{backgroundImage: 'url(11.jpg)'}}>
                <div className="content">
                    <div className="name">CORN</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas sint nam maxime illum quo.</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(22.jpg)'}}>
                <div className="content">
                    <div className="name">ORANGES</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil explicabo in sint aspernatur!</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(33.jpg)'}}>
                <div className="content">
                    <div className="name">HONEY</div>
                    <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla porro dignissimos repellat dolores quod.</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(./44.jpg)'}}>
                <div className="content">
                    <div className="name">STRAW BERRY</div>
                    <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae obcaecati quod officiis laboriosam alias?</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(55.jpg)'}}>
                <div className="content">
                    <div className="name">GRAPES</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis magni assumenda ratione dolor.</div>
                    <button>See more</button>
                </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(66.jpg)'}}>
                <div className="content">
                    <div className="name">RASP BERRIES</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam dolorem voluptate vero aperiam!</div>
                    <button>See more</button>
                </div>
            </div>
        </div>
        <div className="buttons">
            <button id="prev"><i className="fa-solid fa-angle-left"></i></button>
            <button id="next"><i className="fa-solid fa-angle-right"></i></button>
        </div>
    </div>

  )
}

export default carrosel