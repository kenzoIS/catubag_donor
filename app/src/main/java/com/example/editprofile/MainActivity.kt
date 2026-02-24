package com.example.editprofile

import android.app.DatePickerDialog
import android.os.Bundle
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import java.util.Calendar

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val etDob = findViewById<EditText>(R.id.etDob)
        etDob.setOnClickListener {
            showDatePicker(etDob)
        }

        val btnUpdate = findViewById<android.view.View>(R.id.btnUpdate)
        btnUpdate.setOnClickListener {
            Toast.makeText(this, "Profile Updated Successfully", Toast.LENGTH_SHORT).show()
        }
        
        val btnChangeProfile = findViewById<android.view.View>(R.id.btnChangeProfilePicture)
        btnChangeProfile.setOnClickListener {
             Toast.makeText(this, "Change Profile Picture Clicked", Toast.LENGTH_SHORT).show()
             // In a real app, you would launch an image picker here
        }
    }

    private fun showDatePicker(editText: EditText) {
        val calendar = Calendar.getInstance()
        val year = calendar.get(Calendar.YEAR)
        val month = calendar.get(Calendar.MONTH)
        val day = calendar.get(Calendar.DAY_OF_MONTH)

        val datePickerDialog = DatePickerDialog(
            this,
            { _, selectedYear, selectedMonth, selectedDay ->
                val date = "${selectedMonth + 1}/$selectedDay/$selectedYear"
                editText.setText(date)
            },
            year,
            month,
            day
        )
        datePickerDialog.show()
    }
}