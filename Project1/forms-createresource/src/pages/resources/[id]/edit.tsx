import Layout from '@/components/Layout'
import React from 'react'



export default function ResourceEdit() {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className={styles.resourceForm}>
              <h1 className="title">Add New Resource</h1>
              <form action="">
                <div className="field">
                  <label htmlFor="title" className="label">
                    Title
                  </label>
                  <div className="control">
                    <input
                      value={form.title}
                      onChange={handleChange}
                      type="text"
                      name="title"
                      className="input"
                      placeholder="Learn Next JS and Sanity ID"
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="description" className="label">
                    Description
                  </label>
                  <div className="control">
                    <textarea
                      name="description"
                      onChange={handleChange}
                      className="textarea"
                      placeholder="Learn these technologies"
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="link" className="label">
                    Link
                  </label>
                  <div className="control">
                    <input
                      onChange={handleChange}
                      value={form.link}
                      type="text"
                      name="link"
                      className="input"
                      placeholder="http://linktoyourresource.com"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="label">Priority</div>
                  <div className="control">
                    <div className="select">
                      <select
                        value={form.priority}
                        onChange={handleChange}
                        name="priority"
                        id=""
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="timeToFinish" className="label">
                    Time To Finish
                  </label>
                  <div className="control">
                    <input
                      value={form.timeToFinish}
                      onChange={handleChange}
                      name="timeToFinish"
                      type="number"
                      className="input"
                      placeholder="Estimated time to conclude. Ex: 60"
                    />
                  </div>
                  <p className="help">(time is in minutes)</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      onClick={submitForm}
                      className="button is-link"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      onClick={resetForm}
                      className="button is-link is-light"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>

    
  )
}
