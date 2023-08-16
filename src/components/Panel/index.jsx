import "./panel.scss";

const Panel = ({ children, title }) => {
   return (
      <section className="list">
         <div className="list__container">
            <div className="list__body">
               <h1 className="list__title">{title}</h1>
               {children}
            </div>
         </div>
      </section>
   )
};

export default Panel;