<?php
/**
 * @package Sample_Plugin
 * @version 1.0.0
 */
/*
Plugin Name: Sample Plugin
Plugin URI: http://example.com/
Description: The beginning of an awesome plugin
Author: Marta
Version: 1.0.0
Author URI: http://example.com/

Change "Custom-Posts" to the name of your type!
*/

function generate_custom_post_type() {

	$labels = array(
		'name'                  => 'Custom-Posts',
		'singular_name'         => 'Custom-Post',
	);
	$args = array(
		'label'                 => 'Custom-Post',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
        'public'                => true,
        'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
		'rest_base'             => 'custom-posts',
	);
    register_post_type( 'custom-post_type', $args );
}
add_action( 'init', 'generate_custom_post_type', 0 );

/* Optional customs fields function for getting a 'price' field - write your own that address your plugin's needs */
function get_price_field($object, $field_name, $value) {
    return floatval(get_post_meta($object['id'])[$field_name][0]);
}

function register_price_in_api() {
    register_rest_field('custom-post_type', 'price', array(
        'get_callback' => 'get_price_field',
        'update_callback' => null,
        'schema' => null,
    ));
}

add_action( 'rest_api_init', 'register_price_in_api' );