const NewTicketPage = () => {
  return (
    <div>
      <h1>Create a New Ticket</h1>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default NewTicketPage;
