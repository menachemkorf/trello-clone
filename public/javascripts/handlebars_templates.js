this["JST"] = this["JST"] || {};

this["JST"]["add_card_form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/cards\" methos=\"post\"><fieldset><textarea name=\"title\" autofocus required></textarea></fieldset><div class=\"actions\"><input type=\"submit\" class=\"btn btn-success\" value=\"Save\"><a href=\"#\" class=\"cancel\"><i class=\"fa fa-times\"></i></a></div></form>";
},"useData":true});

this["JST"]["add_card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"add\">Add a card</a>";
},"useData":true});

this["JST"]["add_list_form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/lists\" methos=\"post\"><fieldset><input type=\"text\" name=\"title\" placeholder=\"Add a list...\" autofocus required></fieldset><div class=\"actions\"><input type=\"submit\" class=\"btn-success\" value=\"Save\"><a href=\"#\" class=\"cancel\"><i class=\"fa fa-times\"></i></a></div></form>";
},"useData":true});

this["JST"]["add_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"add\">Add a list...</a>";
},"useData":true});

this["JST"]["card_details"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"labels-container\"><h3>Labels</h3><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<li><a href=\"#\" class=\"add-label\"><i class=\"fa fa-plus\"></i></a></li></ul></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a href=\"#\" class=\""
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></li>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"due-date-container\"><h3>Due Date</h3><a href=\"#\" class=\"due-date\">"
    + container.escapeExpression((helpers.format_date_time || (depth0 && depth0.format_date_time) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due : stack1),{"name":"format_date_time","hash":{},"data":data}))
    + "</a></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Description <a class=\"edit-description\" href=\"#\">Edit</a></h3><p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>";
},"8":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"edit-description empty\"><i class=\"fa fa-align-justify\"></i><span class=\"whitespace\"> </span>Edit this description</a>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"comments\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<li><h4>John Doe</h4><p>"
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</p><footer><time>"
    + alias3((helpers.format_date_time || (depth0 && depth0.format_date_time) || alias2).call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"format_date_time","hash":{},"data":data}))
    + "</time></footer></li>";
},"13":function(container,depth0,helpers,partials,data) {
    return "<i class=\"fa fa-check check\" aria-hidden=\"true\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"card-modal\"><div class=\"close\"><i class=\"fa fa-times fa-2x\"></i></div><div class=\"card-modal-main\"><section><div class=\"icon-container\"><i class=\"fa fa-file-o\"></i></div><div class=\"content\"><textarea class=\"title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</textarea>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"description\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</div></div></section><section><div class=\"icon-container\"><i class=\"fa fa-comment-o\"></i></div><div class=\"content\"><h2>Add Comment</h2><form method=\"post\" action=\"/\" class=\"add-comment\"><fieldset><textarea class=\"form-control comment-input\" placeholder=\"Write a comment...\"></textarea></fieldset><input type=\"submit\" class=\"btn btn-success\" name=\"\" value=\"Save\" disabled></form></div></section><section><div class=\"icon-container\"><i class=\"fa fa-align-left\"></i></div><div class=\"content\"><h2>Activity</h2>"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></section></div><aside><section><h2>Add</h2><ul><li><a href=\"#\" class=\"btn btn-primary labels\"><i class=\"fa fa-tag\"></i>Labels</a></li><li><a href=\"#\" class=\"btn btn-primary due-date\"><i class=\"fa fa-clock-o\"></i>Due Date</a></li></ul></section><section><h2>Actions</h2><ul><li><a href=\"#\" class=\"btn btn-primary move\"><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>Move</a></li><li><a href=\"#\" class=\"btn btn-primary copy\"><i class=\"fa fa-files-o\" aria-hidden=\"true\"></i>Copy</a></li><li><a href=\"#\" class=\"btn btn-primary subscribe\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>Subscribe"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a></li><li><a href=\"#\" class=\"btn btn-primary archive\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>Archive</a></li></ul></section></aside></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"labels\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\""
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)))
    + "\"></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge badge-subscribed\"><i class=\"fa fa-eye\"></i></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"badge badge-due\"><i class=\"fa fa-clock-o\"></i><span> "
    + container.escapeExpression((helpers.format_date || (depth0 && depth0.format_date) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due : stack1),{"name":"format_date","hash":{},"data":data}))
    + "</span></div>";
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge badge-description\"><i class=\"fa fa-align-justify\"></i></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"badge badge-comments\"><i class=\"fa fa-comment-o\"></i><span> "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1)) != null ? stack1.length : stack1), depth0))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<a class=\"card\" href=\"#\"><i class=\"fa fa-pencil edit-card-title\"></i>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p><div class=\"badges\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></a>";
},"useData":true});

this["JST"]["colors"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"color "
    + alias2(alias1(depth0, depth0))
    + "\" data-color=\""
    + alias2(alias1(depth0, depth0))
    + "\"></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<header><div class=\"back\"><i class=\"fa fa-arrow-left\"></i></div><div class=\"close\"><i class=\"fa fa-times\"></i></div><p>Create Label</p></header><form id=\"create-label\"><fieldset><dl><dt><label for=\"label-title\">Name</label></dt><dd><input type=\"text\" name=\"label-title\" id=\"label-title\"></dd></dl></fieldset><fieldset><ul class=\"color-palette\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></fieldset><div class=\"actions\"><input type=\"submit\" class=\"btn btn-success\" value=\"Create\"></div></form>";
},"useData":true});

this["JST"]["copy_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<input type=\"checkbox\" name=\"keep_comments\" id=\"keep_comments\" checked><label for=\"keep_comments\">Comments ("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1)) != null ? stack1.length : stack1), depth0))
    + ")</label>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<input type=\"checkbox\" name=\"keep_labels\" id=\"keep_labels\" checked><label for=\"keep_labels\">Labels ("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.labels : stack1)) != null ? stack1.length : stack1), depth0))
    + ")</label>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"6":function(container,depth0,helpers,partials,data) {
    return "selected";
},"8":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">position "
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<header><div class=\"close\"><i class=\"fa fa-times\"></i></div><p>Copy Card</p></header><form><fieldset><p>Title</p><textarea name=\"title\" id=\"new_name\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</textarea><p>Keep...</p>"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.labels : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</fieldset><fieldset><select name=\"lists\" id=\"lists\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><select name=\"positions\" id=\"positions\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></fieldset><div class=\"actions\"><input type=\"submit\" name=\"\" class=\"btn btn-success\" value=\"Create Card\"></div></form>";
},"useData":true});

this["JST"]["edit_description"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form method=\"post\" action=\"/\"><fieldset><textarea class=\"description-input\" placeholder=\"Add a more detailed description...\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea></fieldset><div class=\"actions\"><input type=\"submit\" class=\"btn btn-success\" name=\"\" value=\"Save\"><a href=\"#\" class=\"cancel\"><i class=\"fa fa-times\"></i></a></div></form>";
},"useData":true});

this["JST"]["edit_due_date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><div class=\"close\"><i class=\"fa fa-times\"></i></div><p>Change Due Date</p></header><form><fieldset class=\"date-form-fields\"><dl><dt><label for=\"alternate-date\">Date</label></dt><dd><input type=\"text\" name=\"\" id=\"alternate-date\"></dd></dl><dl><dt><label for=\"time\">Time</label></dt><dd><input type=\"text\" name=\"\" id=\"time\" value=\"12:00 PM\"></dd></dl></fieldset><div id=\"datepicker\" class=\"datepicker\"></div><div class=\"actions\"><input type=\"submit\" name=\"\" class=\"btn btn-success\"><a href=\"\" class=\"btn btn-warning remove\">Remove</a></div></form>";
},"useData":true});

this["JST"]["edit_label"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<li class=\"color "
    + alias2(alias1(depth0, depth0))
    + "\" data-color=\""
    + alias2(alias1(depth0, depth0))
    + "\"></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<header><div class=\"back\"><i class=\"fa fa-arrow-left\"></i></div><div class=\"close\"><i class=\"fa fa-times\"></i></div><p>Change Label</p></header><form id=\"edit-label\" data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><fieldset><dl><dt><label for=\"label-title\">Name</label></dt><dd><input type=\"text\" name=\"label-title\" id=\"label-title\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"></dd></dl></fieldset><fieldset><ul class=\"color-palette\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></fieldset><div class=\"actions\"><input type=\"submit\" class=\"btn btn-success\" value=\"Save\"><a href=\"\" class=\"btn btn-warning delete\">Delete</a></div></form>";
},"useData":true});

this["JST"]["edit_title"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"quick-edit\"><form><textarea class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"actions\"><input type=\"submit\" class=\"btn btn-success\" name=\"\" value=\"Save\"></div></form></div>";
},"useData":true});

this["JST"]["label"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"check\"><i class=\"fa fa-check\"></i></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"label "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.assigned : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><span class=\"edit\"><i class=\"fa fa-pencil edit-label\"></i></span>";
},"useData":true});

this["JST"]["labels"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><div class=\"close\"><i class=\"fa fa-times\"></i></div><p>Labels</p></header><ul></ul><p><a href=\"#\" class=\"create-label\">Create new label</a></p>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><ul class=\"list\" data-list-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></ul>";
},"useData":true});

this["JST"]["move_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">position "
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<header><div class=\"close\"><i class=\"fa fa-times\"></i></div><p>Move Card</p></header><form><fieldset><select name=\"lists\" id=\"lists\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><select name=\"positions\" id=\"positions\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></fieldset><div class=\"actions\"><input type=\"submit\" name=\"\" class=\"btn btn-success\" value=\"Move\"></div></form>";
},"useData":true});

this["JST"]["notifications_result"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"labels list-unstyled list-inline\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\""
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)))
    + "\"></li>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"badge badge-due\"><i class=\"fa fa-clock-o\"></i><span> "
    + container.escapeExpression((helpers.format_date || (depth0 && depth0.format_date) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due : stack1),{"name":"format_date","hash":{},"data":data}))
    + "</span></div>";
},"6":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge badge-description\"><i class=\"fa fa-align-justify\"></i></div>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"badge badge-comments\"><i class=\"fa fa-comment-o\"></i><span> "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1)) != null ? stack1.length : stack1), depth0))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<a class=\"card\" href=\"#\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p><div class=\"badges\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></a>";
},"useData":true});

this["JST"]["notifications_results"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><div class=\"close\"><i class=\"fa fa-times\"></i></div><p>Notifications</p></header><ul class=\"list\"></ul>";
},"useData":true});

this["JST"]["search_result"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"labels list-unstyled list-inline\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\""
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)))
    + "\"></li>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"badge badge-due\"><i class=\"fa fa-clock-o\"></i><span> "
    + container.escapeExpression((helpers.format_date || (depth0 && depth0.format_date) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due : stack1),{"name":"format_date","hash":{},"data":data}))
    + "</span></div>";
},"6":function(container,depth0,helpers,partials,data) {
    return "<div class=\"badge badge-description\"><i class=\"fa fa-align-justify\"></i></div>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"badge badge-comments\"><i class=\"fa fa-comment-o\"></i><span> "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1)) != null ? stack1.length : stack1), depth0))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<a class=\"card\" href=\"#\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.title : stack1), depth0))
    + "</p><div class=\"badges\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.due : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.card : depth0)) != null ? stack1.comments : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></a>";
},"useData":true});

this["JST"]["search_results"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Cards</h2><ul class=\"list\"></ul>";
},"useData":true});