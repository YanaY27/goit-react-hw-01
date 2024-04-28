import s from './Friendlist.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'


export const FriendList = ({friends}) => {
  return (
    <ul className={s.list}>
	{friends.map(item => {
		return (
		<li className={s.item} key={item.id}>
			<FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline}/>
		</li>)
	})}
	
</ul>

  )
}

// export default FriendList
