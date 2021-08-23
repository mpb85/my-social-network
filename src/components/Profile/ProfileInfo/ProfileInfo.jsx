import React from 'react';
import s from './ProfileInfo.module.css'
import Prealoder from "../../common/Prealoder/Prealoder";
import lookingForAJob from '../../../assets/images/lookingForAJob.jpg'
import iFoundAJob from '../../../assets/images/iFoundAJob.jpg'


const ProfileInfo = (props) => {
    if(!props.profile){
       return <Prealoder/>
    }
        return (
            <>
                <div>
                    <div className="row">
                        <div className="col-lg-12 col-main">
                            <main id="main" className="main-content">
                                <div className="beehive-title-bar social">
                                    <div className="title-bar-wrapper">
                                        <div className="title-wrapper screen-reader-text">
                                            <h1 className="title h3">{props.profile.fullName}</h1>
                                            <h3>{props.profile.aboutMe}</h3>
                                        </div>
                                    </div>
                                </div>
                                <article id="post-0"
                                         className="bp_members type-bp_members post-0 page type-page status-publish hentry beehive-post">
                                    <div className="entry-content clearfix">
                                        <div id="buddypress"
                                             className="buddypress-wrap beehive bp-dir-hori-nav alignwide">

                                            <div id="item-header" role="complementary" data-bp-item-id="3"
                                                 data-bp-item-component="members"
                                                 className="users-header single-headers">
                                                <div id={s.coverImageContainer}>
                                                    <div className={s.headerCoverImage}></div>
                                                    <div id={s.itemHeaderCoverImage}>
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div id={s.itemHeaderAvatar}>
                                                                    <div className={s.itemAvatar}>
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/">
                                                                            <img loading="lazy"
                                                                                 src={props.profile.photos.small}
                                                                                 className="avatar user-3-avatar avatar-200 photo"
                                                                                 width="200" height="200"
                                                                                 alt="Profile picture of John Doe" /> </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-9">
                                                                <div id="item-header-content">
                                                                    <div className="item-meta">
                                                                        <span
                                                                            className="activity">Active 16 minutes ago</span>
                                                                    </div>
                                                                    <ul className="member-header-actions action"></ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bp-wrap">


                                                <nav
                                                    className="main-navs no-ajax bp-navs single-screen-navs horizontal users-nav"
                                                    id="object-nav" role="navigation" aria-label="Member menu">

                                                    <div className="row">
                                                        <div className="col-lg-6 ml-auto mr-auto">
                                                            <div className="nav-container">


                                                                <ul className="profile-nav">


                                                                    <li id="activity-personal-li"
                                                                        className="bp-personal-tab current selected loading">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/"
                                                                           id="user-activity" title="Activity">
                                                                            <span
                                                                                className="nav-link-text">Activity</span>

                                                                        </a>
                                                                    </li>


                                                                    <li id="xprofile-personal-li"
                                                                        className="bp-personal-tab">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/profile/"
                                                                           id="user-xprofile" title="Profile">
                                                                            <span
                                                                                className="nav-link-text">Profile</span>

                                                                        </a>
                                                                    </li>


                                                                    <li id="friends-personal-li"
                                                                        className="bp-personal-tab">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/friends/"
                                                                           id="user-friends" title="Friends">
                                                                            <span
                                                                                className="nav-link-text">Friends</span>

                                                                            <span
                                                                                className="count color-primary">1</span>
                                                                        </a>
                                                                    </li>


                                                                    <li id="groups-personal-li"
                                                                        className="bp-personal-tab">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/groups/"
                                                                           id="user-groups" title="Groups">
                                                                            <span
                                                                                className="nav-link-text">Groups</span>

                                                                            <span
                                                                                className="count color-primary">3</span>
                                                                        </a>
                                                                    </li>


                                                                    <li id="forums-personal-li"
                                                                        className="bp-personal-tab">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/forums/"
                                                                           id="user-forums" title="Forums">
                                                                            <span
                                                                                className="nav-link-text">Forums</span>

                                                                        </a>
                                                                    </li>


                                                                    <li id="media-personal-li"
                                                                        className="bp-personal-tab">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/media/"
                                                                           id="user-media" title="Media">
                                                                            <span className="nav-link-text">Media</span>

                                                                            <span
                                                                                className="count color-primary">9</span>
                                                                        </a>
                                                                    </li>


                                                                </ul>


                                                            </div>
                                                        </div>
                                                    </div>

                                                </nav>


                                                <div id="item-body" className="item-body">

                                                    <div className="row">

                                                        <div className="col-lg-3 profile-col-aside left">
                                                            <aside
                                                                className="widget-area profile-widget-area displayed-profile-info">
                                                                <div className="widget">
                                                                    <ul className="connections">
                                                                        <li><span
                                                                            className="count color-primary">My Contact</span></li>
                                                                            <ul>
                                                                                <li><a href={props.profile.contacts.facebook != null ? 'https://' + props.profile.contacts.facebook : 'http://facebook.com'} alt='d' target='_blank'>Facebook</a></li>
                                                                                <li><a href={props.profile.contacts.website != null ? 'https://' + props.profile.contacts.website: '#'} alt='d' target='_blank'>Website</a></li>
                                                                                <li><a href={props.profile.contacts.vk != null ? 'https://' + props.profile.contacts.vk: 'http://vk.com'} alt='d' target='_blank'>VK</a></li>
                                                                                <li><a href={props.profile.contacts.twitter != null ? 'http://' + props.profile.contacts.twitter : 'http://twitter.com'} alt='d' target='_blank'>Twitter</a></li>
                                                                                <li><a href={props.profile.contacts.instagram != null ? 'https://' + props.profile.contacts.instagram: 'http://instagram.com'} alt='d' target='_blank'>Instagram</a></li>
                                                                                <li><a href={props.profile.contacts.youtube != null ? 'https://'+ props.profile.contacts.youtube: 'http://youtube.com' } alt='d' target='_blank'>Youtube</a></li>
                                                                                <li><a href={props.profile.contacts.github != null ? 'https://' + props.profile.contacts.github : 'http://github.com'} alt='d' target='_blank'>Github</a></li>
                                                                                <li><a href={props.profile.contacts.mainLink != null ? 'http://' + props.profile.contacts.mainLink : '#'} alt='d' target='_blank'>Mainlink</a></li>
                                                                            </ul>

                                                                    </ul>
                                                                </div>

                                                                <div className={s.job}>
                                                                    {props.profile.lookingForAJob == false ? <div>Я нашел работу и я знаю {props.profile.lookingForAJobDescription}<img src={iFoundAJob} /></div> : <div>{props.profile.lookingForAJobDescription} <img src={lookingForAJob} /></div>}
                                                                </div>



                                                                <div className="widget">
                                                                    <h5 className="widget-title">My photos</h5>
                                                                    <ul className="member-photo-list">
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1537/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/08/218653702_246122793731755_7548319280320955453_n-250x250.jpg"
                                                                                        alt="218653702_246122793731755_7548319280320955453_n" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1536/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/08/AA5C783C-FA7A-4662-80BB-497E15C13C5B-250x250.png"
                                                                                        alt="AA5C783C-FA7A-4662-80BB-497E15C13C5B" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1535/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/08/Birthday-Messages-250x250.png"
                                                                                        alt="Birthday Messages" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1534/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/08/79a42559f4180bec32d027af464cb91b-250x250.jpg"
                                                                                        alt="79a42559f4180bec32d027af464cb91b" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1533/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/08/290148e17f762a05bb38a289ff1f96b1-250x250.jpg"
                                                                                        alt="290148e17f762a05bb38a289ff1f96b1" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1532/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/08/Magrikie-_-Illustration-_-_-florals-_-plants-250x250.jpg"
                                                                                        alt="Magrikie _ Illustration _ _ florals _ plants" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1531/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/08/Holding-A-Flower-Bird-250x250.jpg"
                                                                                        alt="Holding A Flower Bird" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1138/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/03/image_big_5cecea82795fa-250x250.jpg"
                                                                                        alt="prawns" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rtmedia-list-media rtm-gallery-list member-photo">
                                                                            <div className="inner">
                                                                                <a href="https://mythemestore.com/beehive-preview/members/user/media/1018/">
                                                                                    <img
                                                                                        src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/02/53233374_10218420525735113_5399265523093471232_n-250x250.jpg"
                                                                                        alt="53233374_10218420525735113_5399265523093471232_n" />
                                                                                </a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </aside>
                                                        </div>

                                                        <div className="col-lg-6 profile-col-main">


                                                            <nav className="bp-navs bp-subnavs no-ajax user-subnav"
                                                                 id="subnav" role="navigation"
                                                                 aria-label="Activity menu">
                                                                <ul className="subnav">


                                                                    <li id="just-me-personal-li"
                                                                        className="bp-personal-sub-tab current selected"
                                                                        data-bp-user-scope="just-me">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/"
                                                                           id="just-me">
                                                                            Personal
                                                                        </a>
                                                                    </li>


                                                                    <li id="activity-mentions-personal-li"
                                                                        className="bp-personal-sub-tab"
                                                                        data-bp-user-scope="mentions">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/mentions/"
                                                                           id="activity-mentions">
                                                                            Mentions
                                                                        </a>
                                                                    </li>


                                                                    <li id="activity-favs-personal-li"
                                                                        className="bp-personal-sub-tab"
                                                                        data-bp-user-scope="favorites">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/favorites/"
                                                                           id="activity-favs">
                                                                            Favorites
                                                                        </a>
                                                                    </li>


                                                                    <li id="activity-friends-personal-li"
                                                                        className="bp-personal-sub-tab"
                                                                        data-bp-user-scope="friends">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/friends/"
                                                                           id="activity-friends">
                                                                            Friends
                                                                        </a>
                                                                    </li>


                                                                    <li id="activity-groups-personal-li"
                                                                        className="bp-personal-sub-tab"
                                                                        data-bp-user-scope="groups">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/groups/"
                                                                           id="activity-groups">
                                                                            Groups
                                                                        </a>
                                                                    </li>


                                                                </ul>
                                                            </nav>


                                                            <h2 className="bp-screen-reader-text">
                                                                Member Activities</h2>


                                                            <div className="subnav-filters filters no-ajax"
                                                                 id="subnav-filters">

                                                                <div className="subnav-search clearfix">

                                                                    <div id="activity-rss-feed" className="feed">
                                                                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/feed/"
                                                                           className="bp-tooltip"
                                                                           data-bp-tooltip="RSS Feed">
                                                                            <span className="bp-screen-reader-text">RSS Feed</span>
                                                                        </a>
                                                                    </div>


                                                                </div>

                                                                <div id="comp-filters"
                                                                     className="component-filters clearfix">
                                                                    <div id="activity-filter-select"
                                                                         className="last filter">
                                                                        <label htmlFor="activity-filter-by"
                                                                               className="bp-screen-reader-text">
                                                                            <span>Show:</span>
                                                                        </label>
                                                                        <div className="select-wrap">
                                                                            <select id="activity-filter-by"
                                                                                    data-bp-filter="activity">

                                                                                <option value="0">— Everything —
                                                                                </option>
                                                                                <option
                                                                                    value="activity_update">Updates
                                                                                </option>
                                                                                <option value="rtmedia_update">rtMedia
                                                                                    Updates
                                                                                </option>
                                                                                <option
                                                                                    value="friendship_accepted,friendship_created">Friendships
                                                                                </option>
                                                                                <option value="created_group">New
                                                                                    Groups
                                                                                </option>
                                                                                <option value="joined_group">Group
                                                                                    Memberships
                                                                                </option>
                                                                                <option
                                                                                    value="group_details_updated">Group
                                                                                    Updates
                                                                                </option>
                                                                                <option
                                                                                    value="bbp_topic_create">Topics
                                                                                </option>
                                                                                <option
                                                                                    value="bbp_reply_create">Replies
                                                                                </option>

                                                                            </select>
                                                                            <span className="select-arrow"
                                                                                  aria-hidden="true"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>



                                                            <div id="activity-stream" className="activity single-user"
                                                                 data-bp-list="activity" style={{display: 'block'}}>

                                                                <ul className="activity-list item-list bp-list">


                                                                    <li className="activity rtmedia_update activity-item animate-item slideInUp text-rendered"
                                                                        id="activity-7129" data-bp-activity-id="7129"
                                                                        data-bp-timestamp="1628188682"
                                                                        style={{visibility: 'visible', animationName: 'slideInUp'}}>

                                                                        <div className="activity-avatar item-avatar">

                                                                            <a href="https://mythemestore.com/beehive-preview/members/user/">

                                                                                <img loading="lazy"
                                                                                     src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/61012508a58db-bpfull.jpg"
                                                                                     className="avatar user-3-avatar avatar-200 photo"
                                                                                     width="200" height="200"
                                                                                     alt="Profile picture of John Doe" />
                                                                            </a>

                                                                        </div>

                                                                        <div className="activity-content">

                                                                            <div className="activity-header">

                                                                                <div className="posted-meta">
                                                                                    <p><a
                                                                                        href="https://mythemestore.com/beehive-preview/members/user/">John
                                                                                        Doe</a> posted an update</p>
                                                                                </div>

                                                                                <div className="date mute">
                                                                                    16 minutes ago
                                                                                </div>

                                                                            </div>


                                                                            <div className="activity-inner">

                                                                                <div
                                                                                    className="rtmedia-activity-container">
                                                                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-1 rtm-activity-photo-list">
                                                                                        <li className="rtmedia-list-item media-type-photo">
                                                                                            <a href="https://mythemestore.com/beehive-preview/members/user/media/1537/"
                                                                                               rel="nofollow ugc">
                                                                                                <div
                                                                                                    className="rtmedia-item-thumbnail">
                                                                                                    <img loading="lazy"
                                                                                                         alt="218653702_246122793731755_7548319280320955453_n"
                                                                                                         src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/3/2021/08/218653702_246122793731755_7548319280320955453_n-280x320.jpg" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="rtmedia-item-title"
                                                                                                    style={{maxwidth: '320px'}}>
                                                                                                    <p> 218653702_246122793731755_7548319280320955453_n</p>
                                                                                                </div>
                                                                                            </a><p><a
                                                                                            href="https://mythemestore.com/beehive-preview/members/user/media/1537/"
                                                                                            rel="nofollow ugc"
                                                                                            className="no-popup"> </a>
                                                                                        </p></li>
                                                                                    </ul>
                                                                                </div>

                                                                            </div>


                                                                        </div>


                                                                    </li>

                                                                    <li className="load-more">
                                                                        <a href="https://mythemestore.com/beehive-preview/wp-admin/admin-ajax.php?acpage=2">Load
                                                                            More</a>
                                                                    </li>


                                                                </ul>


                                                            </div>



                                                        </div>

                                                        <div className="col-lg-3 profile-col-aside right">
                                                            <aside id="member_profile_sidebar"
                                                                   className="widget-area profile-widget-area member-profile-sidebar">
                                                                <div id="beehive_widget_latest_activity-2"
                                                                     className="widget beehive-activity-widget buddypress">
                                                                    <h5 className="widget-title">Recent activity</h5>
                                                                    <ul className="widget-activity-list">
                                                                        <li className="activity rtmedia_update activity-item text-rendered"
                                                                            id="activity-7129">
                                                                            <p><a
                                                                                href="https://mythemestore.com/beehive-preview/members/user/">John
                                                                                Doe</a> posted an update</p>
                                                                            <span className="activity mute">16 minutes ago</span>
                                                                        </li>
                                                                        <li className="activity rtmedia_update activity-item text-rendered"
                                                                            id="activity-7128">
                                                                            <p><a
                                                                                href="https://mythemestore.com/beehive-preview/members/user/">John
                                                                                Doe</a> posted an update</p>
                                                                            <span className="activity mute">21 minutes ago</span>
                                                                        </li>
                                                                        <li className="activity activity_comment activity-item"
                                                                            id="activity-7127">
                                                                            <p><a
                                                                                href="https://mythemestore.com/beehive-preview/members/user/">John
                                                                                Doe</a> posted a new activity comment
                                                                            </p>
                                                                            <span className="activity mute">23 minutes ago</span>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </aside>
                                                        </div>

                                                    </div>

                                                </div>


                                            </div>


                                        </div>

                                    </div>

                                </article>



                            </main>

                        </div>



                    </div>
                </div>
        <div>
            <div><img src={props.profile.photos.large} /></div>
        </div>
                </>
    )
}

export default ProfileInfo;