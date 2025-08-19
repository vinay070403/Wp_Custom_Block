<?php

/**
 * Plugin Name: My Custom Block
 * Description: A custom Gutenberg block built with @wordpress/scripts.
 * Version: 1.0.0
 * Author: Vinay
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}
function my_custom_block_enqueue_assets()
{
    wp_register_script(
        'my-custom-block-editor',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    wp_register_style(
        'my-custom-block-style',
        plugins_url('style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );

    register_block_type('myplugin/hello-block', array(
        'editor_script' => 'my-custom-block-editor',
        'style'         => 'my-custom-block-style',
    ));

    register_block_type('myplugin/testimonial-block', array(
        'editor_script' => 'my-custom-block-editor',
        'style'         => 'my-custom-block-style',
    ));
}
add_action('init', 'my_custom_block_enqueue_assets');
