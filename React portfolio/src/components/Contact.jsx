function Contact() {
    return (
        <>
            <h1 id="Contact">Contact info</h1>
            <form>
              <label for="fname">First name:</label><br/>
              <input type="text" id="fname" name="fname"/><br/>
             <label for="email">Email Adress:</label><br/>
             <input type="text" id="email" name="email"/><br/>
             <label for="message">Enter message:</label><br/>
             <input type="text" id="message" name="message"/>
              </form>
             </>
      )

}
                                export default Contact