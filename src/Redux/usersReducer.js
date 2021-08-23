const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


export const followUserAC = (userId) => ({type: 'FOLLOW', userId});
export const unFollowUserAC = (userId) => ({type: 'UNFOLLOW', userId});
export const setUserAC = (users) => ({type: 'SET_USER', users});
export const setCurrentPagerAC = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});
export const setTotalUserCountAC = (count) => ({type: 'SET_TOTAL_USER_COUNT', count});
export const toggleIsFetchingAC = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id == action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id == action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            };
        case SET_USER:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export default usersReducer;