import "../App.css";

function Contact() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <input type="submit" value="Submit" />
        
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
