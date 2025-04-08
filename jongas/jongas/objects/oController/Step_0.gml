/// @description Insert description here

// Check for nearby interactable objects
var nearestInteractable = noone;
var nearestDistance = interactableRange;

with(oPc) // Replace "obj_interactable" with the object you want to interact with.
{
    var distance = point_distance(x, y, oPlayer.x, oPlayer.y); // Assuming "obj_player" is your player character object.

    if (distance < nearestDistance)
    {
        nearestDistance = distance;
        nearestInteractable = id;
    }
}

// Update the indicator
if (nearestInteractable != noone)
{
    if (indicator == noone)
    {
        indicator = instance_create_layer(x, y - 32, "Instances",oInteraction); // Adjust the position as needed.
    }

    indicator.x = nearestInteractable.x;
    indicator.y = nearestInteractable.y - 62; // Adjust the position as needed.
}
else
{
    if (indicator != noone)
    {
        instance_destroy(indicator);
        indicator = noone;
    }
}

