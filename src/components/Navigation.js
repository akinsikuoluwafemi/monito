import React, { Component } from 'react'
 class Navigation extends Component {
    render() {
        return (
            <nav>
                <div class="dropdownBackground">
                    <span class="arrow"></span>
                </div>

                <ul>
                    <li>
                        <a href="#">Send money</a>
                        <ul >
                            <li><a href="#">Send Money</a></li>
                            <li><a href="#">Get the real exchange rates</a></li>
                            <li><a href="#">See our coverage</a></li>
                            <li><a href="#">Pricing</a></li>

                        </ul>
                    </li>

                    <li>
                        <a href="#">Receive money</a>
                        <ul >
                            <li><a href="#">Get multi-currency account</a></li>
                            <li><a href="#">Get international bank details</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Pricing</a></li>

                        </ul>
                    </li>

                    <li>
                        <a href="#">Debit card</a>
                        <ul>
                            <li><a href="#">Get a monito mastercard</a></li>
                            <li><a href="#">Compare monito to banks</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Pricing</a></li>

                        </ul>
                    </li>

                    <li>
                        <a href="#">Business</a>
                        <ul>
                            <li><a href="#">Monito for Business</a></li>
                            <li><a href="#">Freelancers</a></li>
                            <li><a href="#">E-commerce</a></li>
                            <li><a href="#">Enterprise</a></li>
                            <li><a href="#">Business Pricing</a></li>
                        </ul>
                    </li>

                    <li >
                        <a href="#">About</a>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Mid-Market rate</a></li>
                            <li><a href="#">Our-story</a></li>
                        </ul>
                    </li>

                   
                    
                </ul>
            </nav>
        )
    }
}

export default Navigation;