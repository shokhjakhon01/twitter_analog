import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((post) => {
    const { id, ...postProps } = post;
    return (
      <li key={post.id} className="list-group-item">
        <PostListItem
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
          {...postProps}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
