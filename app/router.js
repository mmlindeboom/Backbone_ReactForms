define(function (require) {

  var Backbone = require('backbone'),
      _ = require('lodash'),
      React = require('react'),
      ReactForms;
      ReactForms = require('react-forms'),

  "use strict";

  return Backbone.Router.extend({
    routes: {
      '*default': 'defaultAction'
    },
 
    defaultAction: function () {
      //console.log(ReactForms);
      var Schema = ReactForms.schema.Schema,
            Property = ReactForms.schema.Property,
            Form = ReactForms.Form,
            schema = (
            <Schema>
              <Property name="firstName" label="First Name" />
              <Property name="lastName" label="Last Name" />
              <Property name="age" type="number" label="Age" />
            </Schema>
            );
     React.renderComponent(<Form schema={schema} />, document.body);
    }
  });
});