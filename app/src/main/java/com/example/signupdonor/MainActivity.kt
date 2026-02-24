package com.example.signupdonor

import android.app.Activity
import android.content.Intent
import android.graphics.Color
import android.graphics.Typeface
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.viewpager2.widget.ViewPager2 // Added for Carousel

class MainActivity : Activity() {

    // Frontend state: tracking which tab is active (1 = Front, 2 = Back)
    private var currentTab = 1

    // Carousel logic variables
    private lateinit var viewPager: ViewPager2
    private val sliderHandler = Handler(Looper.getMainLooper())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // --- CAROUSEL SETUP ---
        viewPager = findViewById(R.id.viewPagerCarousel)

        // List of your images in the res/drawable folder
        // Make sure you have images named img_1, img_2, and img_3 in your drawable folder!
        val images = listOf(
            R.drawable.img_1,
            R.drawable.img_2,
            R.drawable.img_3,
            R.drawable.img_4

        )

        viewPager.adapter = CarouselAdapter(images)

        // Auto-scroll logic (Transitions every 3 seconds)
        val sliderRunnable = object : Runnable {
            override fun run() {
                // Move to next slide, or back to first if at the end
                viewPager.currentItem = (viewPager.currentItem + 1) % images.size
                sliderHandler.postDelayed(this, 3000)
            }
        }
        sliderHandler.postDelayed(sliderRunnable, 3000)

        // --- UI ELEMENTS ---
        val tabFrontId = findViewById<LinearLayout>(R.id.tabFrontId)
        val tabBackId = findViewById<LinearLayout>(R.id.tabBackId)
        val tvTab1Number = findViewById<TextView>(R.id.tvTab1Number)
        val tvTab1Text = findViewById<TextView>(R.id.tvTab1Text)
        val lineTab1 = findViewById<View>(R.id.lineTab1)
        val tvTab2Number = findViewById<TextView>(R.id.tvTab2Number)
        val tvTab2Text = findViewById<TextView>(R.id.tvTab2Text)
        val lineTab2 = findViewById<View>(R.id.lineTab2)
        val uploadBox = findViewById<LinearLayout>(R.id.uploadBox)
        val btnFinish = findViewById<Button>(R.id.btnFinish)

        val activeColor = getColor(R.color.colorAccent)
        val inactiveColor = getColor(R.color.colorHint)

        // --- TAB SWITCHING LOGIC ---

        tabFrontId.setOnClickListener {
            currentTab = 1
            tvTab1Number.setTextColor(activeColor)
            tvTab1Text.setTextColor(activeColor)
            tvTab1Number.setTypeface(null, Typeface.BOLD)
            lineTab1.setBackgroundColor(activeColor)
            lineTab1.layoutParams.height = (2 * resources.displayMetrics.density).toInt()

            tvTab2Number.setTextColor(inactiveColor)
            tvTab2Text.setTextColor(inactiveColor)
            tvTab2Number.setTypeface(null, Typeface.NORMAL)
            lineTab2.setBackgroundColor(Color.parseColor("#D0D0D0"))
            lineTab2.layoutParams.height = (1 * resources.displayMetrics.density).toInt()

            lineTab1.requestLayout()
            lineTab2.requestLayout()
        }

        tabBackId.setOnClickListener {
            currentTab = 2
            tvTab2Number.setTextColor(activeColor)
            tvTab2Text.setTextColor(activeColor)
            tvTab2Number.setTypeface(null, Typeface.BOLD)
            lineTab2.setBackgroundColor(activeColor)
            lineTab2.layoutParams.height = (2 * resources.displayMetrics.density).toInt()

            tvTab1Number.setTextColor(inactiveColor)
            tvTab1Text.setTextColor(inactiveColor)
            tvTab1Number.setTypeface(null, Typeface.NORMAL)
            lineTab1.setBackgroundColor(Color.parseColor("#D0D0D0"))
            lineTab1.layoutParams.height = (1 * resources.displayMetrics.density).toInt()

            lineTab1.requestLayout()
            lineTab2.requestLayout()
        }

        // --- UPLOAD LOGIC ---

        uploadBox.setOnClickListener {
            val intent = Intent(Intent.ACTION_GET_CONTENT)
            intent.type = "image/*"
            startActivityForResult(Intent.createChooser(intent, "Select ID Image"), currentTab)
        }

        btnFinish.setOnClickListener {
            Toast.makeText(this, "Registration Submitted!", Toast.LENGTH_LONG).show()
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (resultCode == RESULT_OK && data != null) {
            if (requestCode == 1) {
                Toast.makeText(this, "Front Page ID Uploaded!", Toast.LENGTH_SHORT).show()
            } else if (requestCode == 2) {
                Toast.makeText(this, "Back Page ID Uploaded!", Toast.LENGTH_SHORT).show()
            }
        }
    }
}