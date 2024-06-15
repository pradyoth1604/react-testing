export const Application = () => {
  return (
    <div>
        <h1>Heading</h1>
        <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Type name....." />
        </div>
        <div>
          <label htmlFor="Job-location">Job Location</label>
          <select id="job-location">
            <option>Select State</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Pune</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            condition
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
