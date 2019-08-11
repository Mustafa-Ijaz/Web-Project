import React, {
    Component
} from 'react';
import defaultBcg from '../images/room-4.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {
    Link
} from 'react-router-dom';
import {
    RoomContext
} from '../context1';
import StyledCo from '../components/StyledComp';
export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;

    render() {
        const {
            getRoom
        } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return ( <
                div className = "error" >
                <
                h3 > SORRY, NO SUCH ROOM EXIST... < /h3> <
                Link to = '/rooms'
                className = "btn-primary" >
                Back To Rooms <
                /Link> <
                /div>
            );
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            laundry,
            images
        } = room;
        const [mainbanner, ...defaultImg] = images;
        return ( <
            >
            <
            StyledCo img = {
                images[0] || this.state.defaultBcg
            } >
            <
            Banner title = {
                `${name} room`
            } >
            <
            Link to = "/rooms"
            className = "btn-primary" >
            RETURN TO ROOMS <
            /Link> <
            /Banner> <
            /StyledCo> <
            section className = "single-room" >
            <
            div className = "single-room-images" > {
                defaultImg.map((item, index) => {
                    return <img key = {
                        index
                    }
                    src = {
                        item
                    }
                    alt = {
                        name
                    }
                    />
                })
            } <
            /div>

            <
            div className = "single-room-info" >
            <
            article className = "desc" >
            <
            h3 > DETAILS < /h3> <
            p > {
                description
            } < /p> <
            /article> <
            article className = "info" >
            <
            h4 > BOOKING PRICE < /h4> <
            h6 > PRICE: $ {
                price
            } < /h6> <
            h6 >
            Number of Adults: {
                " "
            } {
                capacity > 1 ? `${capacity}` : `${capacity}`
            } <
            /h6> <
            h6 > {
                laundry ? "Free Laundry Service" : "No Laundry Service"
            } <
            /h6> <
            h6 > {
                breakfast && "Free BreakFast included"
            } <
            /h6>

            <
            /article> <
            /div> <
            /section>

            <
            section className = "room-extras" >
            <
            h5 >
            FACILITIES <
            /h5> <
            ol className = "extras" > {
                extras.map((item, index) => {
                    return <li key = {
                        index
                    } > {
                        item
                    } < /li>
                })
            } <
            /ol> <
            /section> <
            />
        )
    }
}