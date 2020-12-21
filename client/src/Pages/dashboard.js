import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../components/layout/Header";
import Note from "../components/layout/Note";
import Footer from "../components/layout/Footer";
import CreateArea from "../components/layout/CreateArea";



function Dashboard({notes, auth: loading}) {

  
    return (
      <div>
        <Header />
        <CreateArea />
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
            />
          );
        })}
        <Footer />
      </div>
    );
    
   
  
    
}

Dashboard.propTypes={
  auth: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired
};

const mapStateToProps = state =>({
 auth: state.auth,
 notes: state.todo.notes
});
export default connect(mapStateToProps,null)(Dashboard);
