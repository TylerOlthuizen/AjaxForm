# AjaxForm
<h2> Introduction </h2>
<div><p>
	Using an Ajax form is a great solution for any type of project and it is very simple and straight forward. Ajax allows us to dynmacially submit the form and send all the information we need to me processed through a PHP file we will be creating.
</p></div>

<div>
	<pre>
		<form class="ajax-form" method="post" action="sender.php" >
			<div class="form-group">
				<label for="Name">Name</label>
				<input name="name" type="text">
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input name="email" type="text">
			</div>
			<div class="form-group">
				<label for="phone">Phone</label>
				<input name="phone" type="text">
			</div>
			<div class="form-group form-group-textarea">
				<textarea name="message"></textarea>
			</div>
			<div class="form-group">
				<input type="submit" name="submit" value="submit">
			</div>
		</form>
	</pre>
</div>
