import React from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import ButtonComponent from "./component/button";
import PostList from "./component/PostList";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

function App(props) {
  const postReducer = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  //const { posts } = props;
  const fetch = () => {
    dispatch(fetchPosts());
  };

  const buttonProps = {
    buttonText: "Get Posts",
    emitEvent: () => {
      fetch();
    },
  };
  return (
    <div>
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
        <ButtonComponent {...buttonProps} />

        {postReducer.length > 0 && (
          <div>
            {postReducer.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              };
              return <PostList key={index} {...configListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
